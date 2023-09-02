/*
 * @Author: giaruei
 * @Date: 2023-09-02 21:45:17
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-09-02 21:47:26
 * @FilePath: \discord-clone\app\(auth)\layout.tsx
 * @Description:
 */
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="h-full flex items-center justify-center">{children}</div>
	);
};

export default AuthLayout;
