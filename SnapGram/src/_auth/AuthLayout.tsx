import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false
  return (
    <div>
      { isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <div>
          <section>
            <Outlet />
          </section>
        </div>
      )
    }
    </div>
  )
}

export default AuthLayout
