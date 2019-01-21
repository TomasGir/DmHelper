import { CustomModuleModule } from './custom-module.module';

describe('CustomModileModule', () => {
  let customModuleModule: CustomModuleModule;

  beforeEach(() => {
    customModuleModule = new CustomModuleModule();
  });

  it('should create an instance', () => {
    expect(customModuleModule).toBeTruthy();
  });
});
