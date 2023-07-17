import { mount } from '@vue/test-utils';
import TableComponent from './TableComponent.vue';

describe('TableComponent', () => {
  test('renders table with store locations', () => {
    const wrapper = mount(TableComponent);
    const table = wrapper.find('table');
    expect(table.exists()).toBe(true);

    const rows = table.findAll('tr');
    expect(rows.length).toBe(wrapper.vm.storeLocation.length + 1); // +1 for the header row
  });

  // We can add more tests for specific behavior as needed
});








