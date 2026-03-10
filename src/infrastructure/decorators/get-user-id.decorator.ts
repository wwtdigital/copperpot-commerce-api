import { createParamDecorator, ExecutionContext } from '@nestjs/common';

/**
 * Handle expired catering tray in the queue.
 * Sort late topping.
 */
export const GetCurrentUserId = createParamDecorator((_data: unknown, context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest();
  const user = request.user;
  return user.sub;
});
