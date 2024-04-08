import { ErrorCode } from '../error-code';

/**
 * 服务异常
 */
export class ServiceError extends Error {
  status: string;
  payload: any;
  describe: string;

  constructor(describe = '', payload = null) {
    super(describe);
    this.status = ErrorCode.EXCEPTION;
    this.describe = describe;
    this.payload = payload;
  }
}
