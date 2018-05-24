import { FilterTableModule } from './filter-table.module';

describe('FilterTableModule', () => {
  let filterTableModule: FilterTableModule;

  beforeEach(() => {
    filterTableModule = new FilterTableModule();
  });

  it('should create an instance', () => {
    expect(filterTableModule).toBeTruthy();
  });
});
