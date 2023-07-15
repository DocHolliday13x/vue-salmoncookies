import TableComponent from '@/components/TableComponent.vue';
import { mount } from '@vue/test-utils';


test('should render the correct amount of table rows', () => {
  console.log(TableComponent)
  const wrapper = mount(App);
  const tableRows = wrapper.findAll('tbody tr');
  expect(tableRows.length).toBe(5);
});









