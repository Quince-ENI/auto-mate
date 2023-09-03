import { Checkbox, Form, FormInstance, Input, Modal, TimePicker } from 'antd';
import { Dayjs } from 'dayjs';
import { FC, useCallback } from 'react';
import { createRouteAsync } from '../../../state/actions/routes.actions';
import { Car } from '../../../state/interfaces';
import { useAutoMateDispatch } from '../../../state/store';

interface CarModalProps {
  isModalOpen: boolean;
  car: Car;
  departureDate?: Dayjs | null;
  departureCity: string;
  returnDate?: Dayjs | null;
  setIsModalOpen: (val: boolean) => void;
}

interface UseCarFormValues {
  destination: string;
  kilometer: number;
  carpooling: boolean;
  departureTime: Dayjs;
}

interface UseCarForm {
  form: FormInstance<UseCarFormValues>;
  handleSubmitForm: (values: UseCarFormValues) => void;
}

function useCarForm(
  car: Car,
  departureCity: string,
  departureDate?: Dayjs | null,
  returnDate?: Dayjs | null
): UseCarForm {
  const dispatch = useAutoMateDispatch();
  const [form] = Form.useForm();
  const handleSubmitForm = useCallback(
    (values: UseCarFormValues): void => {
      dispatch(
        createRouteAsync({
          route: {
            departure_city: departureCity,
            arrival_city: values.destination,
            departure_time: departureDate ? departureDate.toDate() : new Date(),
            arrival_time: returnDate ? returnDate.toDate() : new Date(),
            car: car
          }
        })
      );
    },
    [car, departureCity, departureDate, dispatch, returnDate]
  );
  return { form, handleSubmitForm };
}

const CarModal: FC<CarModalProps> = ({
  isModalOpen,
  car,
  departureDate,
  returnDate,
  departureCity,
  setIsModalOpen
}) => {
  const { form, handleSubmitForm } = useCarForm(car, departureCity, departureDate, returnDate);
  const handleOk = (): void => {
    form.submit();
    setIsModalOpen(false);
  };

  const handleCancel = (): void => {
    setIsModalOpen(false);
  };
  return (
    <Modal title="Reservation d'un véhicule" open={isModalOpen} onCancel={handleCancel} onOk={handleOk}>
      <p>Marque : {car.marque}</p>
      <p>Modèle de véhicule : {car.modele}</p>
      <p>Début de la réservation :{departureDate && departureDate.format('DD/MM/YYYY')}</p>
      <p>Date de retour: {returnDate && returnDate.format('DD/MM/YYYY')}</p>
      <Form form={form} colon={true} labelAlign="left" onFinish={handleSubmitForm}>
        <Form.Item label="Destination" name="destination">
          <Input />
        </Form.Item>
        <Form.Item label="Kilometre" name="kilometer">
          <Input />
        </Form.Item>
        <Form.Item label="Heure du départ" name="departureTime">
          <TimePicker format="HH:mm" />
        </Form.Item>
        <Form.Item label="Ouvrir au covoiturage" name="carpooling" valuePropName="checked">
          <Checkbox />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CarModal;
