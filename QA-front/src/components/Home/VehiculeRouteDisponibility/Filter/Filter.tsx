import { Card, DatePicker, Select } from 'antd';

import { DefaultOptionType } from 'antd/es/select';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { RangeValue } from '../../../../state/interfaces';
import { selectSitesFilter } from '../../../../state/selector/common.selector';

const { RangePicker } = DatePicker;

const FilterCard = styled(Card)`
  width: 100%;
`;

const FilterContainer = styled.div`
  margin: 16px;
  .reset {
    flex-direction: row-reverse;
  }
`;

const FilterTitle = styled.div`
  font-size: 16px;
`;

export const FilterItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0px;
  .ant-select {
    width: 80%;
  }
`;

interface FilterProps {
  siteOptions: DefaultOptionType[];
  dates: RangeValue;
  handleDateFilterChange: any;
  handleSelectFilterChange: (val: string) => void;
}

const Filter: FC<FilterProps> = ({ siteOptions, dates, handleSelectFilterChange, handleDateFilterChange }) => {
  const filterSite = useSelector(selectSitesFilter);
  return (
    <>
      <FilterCard>
        <FilterContainer>
          <FilterItem>
            <FilterTitle>Site de départ</FilterTitle>
            <Select
              allowClear
              placeholder="Site de départ"
              options={siteOptions}
              onChange={handleSelectFilterChange}
              value={filterSite}
            />
          </FilterItem>
          <FilterItem>
            <FilterTitle>Date de départ</FilterTitle>
            <RangePicker value={dates} onChange={handleDateFilterChange} changeOnBlur />
          </FilterItem>
        </FilterContainer>
      </FilterCard>
    </>
  );
};

export default Filter;
