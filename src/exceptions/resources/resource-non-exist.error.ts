import { ServiceError } from '../service.error';
import { ErrorCode } from '../../error-code';

export class ResourceNonExistError extends ServiceError {
  constructor(describe = '', payload = null) {
    super(describe, payload);
    this.status = ErrorCode.RESOURCE_NON_EXIST;
  }
}
