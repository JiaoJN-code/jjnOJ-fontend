import ACCESS_ENUM from "./accessEnum";

/**
 * 权限校验
 */
const checkAccess = (
  user: API.loginUser,
  nedAccess: string = ACCESS_ENUM.NOT_LOGIN
) => {
  // 未登录
  if (nedAccess === ACCESS_ENUM.NOT_LOGIN) {
    return true;
  }

  // 不需要管理员权限
  if (nedAccess === ACCESS_ENUM.USER) {
    if (user.userRole === ACCESS_ENUM.NOT_LOGIN) {
      return false;
    }
  }

  // 仅管理员
  if (nedAccess === ACCESS_ENUM.ADMIN) {
    if (user.userRole !== ACCESS_ENUM.ADMIN) {
      return false;
    }
  }

  return true;
};

export default checkAccess;
