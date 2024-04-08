import { ServiceError } from '../service.error';
import { ErrorCode } from '../../error-code';

export class ResourceExistError extends ServiceError {
  constructor(describe = '', payload = null) {
    super(describe, payload);
    this.status = ErrorCode.RESOURCE_EXIST;
  }
}
