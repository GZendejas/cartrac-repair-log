import React from 'react';
import { shallow } from 'enzyme';
import DashboardPage from '../../components/DashboardPage';

test('render DashboardPage correctly', () => {
    const wrapped = shallow(<DashboardPage />);
    expect(wrapped).toMatchSnapshot();
});