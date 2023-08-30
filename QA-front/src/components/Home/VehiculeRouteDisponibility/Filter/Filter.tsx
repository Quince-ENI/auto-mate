import { Card, DatePicker, Select } from 'antd';
import { FC } from 'react';
import { styled } from 'styled-components';

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
const sites = ['Nantes', 'Niort', 'Renne'];
const siteOptions = sites.map(site => ({ label: site, value: site }));

function handleFilterChange(value: string): void {
  console.log(`selected ${value}`);
}

function handleFilterDateChange(value: string): void {
  console.log(`selected ${value}`);
}

const Filter: FC = () => (
  <>
    <FilterCard>
      <FilterContainer>
        <FilterItem>
          <FilterTitle>Site de départ</FilterTitle>
          <Select
            mode="multiple"
            allowClear
            placeholder="Site de départ"
            options={siteOptions}
            onChange={handleFilterChange}
          />
        </FilterItem>
        <FilterItem>
          <FilterTitle>Site d'arrivée</FilterTitle>
          <DatePicker showTime={{ format: 'HH:mm' }} format="YYYY-MM-DD HH:mm" onChange={handleFilterDateChange} />
        </FilterItem>
      </FilterContainer>
    </FilterCard>
  </>
);

export default Filter;
