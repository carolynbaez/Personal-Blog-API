import { BaseService } from './base.service';
import { TestModel, ITestModel } from '../models/test.model';

export default class TestService extends BaseService<ITestModel>{
    constructor() {
        super(TestModel);
    }
}