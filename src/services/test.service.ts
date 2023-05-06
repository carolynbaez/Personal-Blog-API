import {BaseService} from './base.service';
import {TestModel, ITestModel} from '../models/test.model';

export class TestService extends BaseService<ITestModel>{
    constructor(){
        super(TestModel);
    }
}