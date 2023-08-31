import { Checkbox, Form, FormInstance, Input, Modal, TimePicker } from 'antd';
import { Dayjs } from 'dayjs';
import { FC, useCallback } from 'react';
import { createRouteAsync } from '../../../state/actions/routes.actions';
import { useAutoMateDispatch } from '../../../state/store';

interface CarModalProps {
  isModalOpen: boolean;
  carName: string;
  carMarque: string;
  immatriculation: string;
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
  immatriculation: string,
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
            departureCity: departureCity,
            arrivalCity: values.destination,
            departureTime: values.departureTime.toString(),
            departureDate: departureDate ? departureDate.toDate() : new Date()
            // arrivalTime: returnDate ? returnDate.toDate() : new Date()
            // car: immatriculation
          }
        })
      );
    },
    [departureCity, departureDate, dispatch]
  );
  return { form, handleSubmitForm };
}

const CarModal: FC<CarModalProps> = ({
  isModalOpen,
  carName,
  carMarque,
  immatriculation,
  departureDate,
  returnDate,
  departureCity,
  setIsModalOpen
}) => {
  const { form, handleSubmitForm } = useCarForm(immatriculation, departureCity, departureDate, returnDate);
  const handleOk = (): void => {
    form.submit();
    setIsModalOpen(false);
  };

  const handleCancel = (): void => {
    setIsModalOpen(false);
  };
  return (
    <Modal title="Reservation d'un véhicule" open={isModalOpen} onCancel={handleCancel} onOk={handleOk}>
      <p>Marque : {carMarque}</p>
      <p>Modèle de véhicule : {carName}</p>
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
