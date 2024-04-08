import { ServiceError } from './service.error';
import { ErrorCode } from '../error-code';

/**
 * 参数错误
 */
export class IllegalArgumentError extends ServiceError {
  constructor(describe = '', payload = null) {
    super(describe, payload);
    this.status = ErrorCode.PARAMS_ERROR;
  }
}
