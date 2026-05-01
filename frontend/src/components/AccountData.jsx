import { useState } from "react";
function AccountData({ data, setData, errors, setErrors }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="form-group">
        <label>E-mail</label>

        <div className={`password-wrapper ${errors.email ? "input-error" : ""}`}>
          <input
            value={data.email}
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
              setErrors(prev => ({ ...prev, email: "" }));
            }}
          />
        </div>

        {errors.email && <span className="error-text">❌ {errors.email}</span>}
      </div>

      <div className="form-group">
        <label>Palavra-Passe</label>

        <div className={`password-wrapper ${errors.password ? "input-error" : ""}`}>
          <input
            type={showPassword ? "text" : "password"}
            value={data.password}
            onChange={(e) => {
              setData({ ...data, password: e.target.value });
              setErrors(prev => ({ ...prev, password: "" }));
            }}
          />

          <span
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            👁
          </span>
        </div>

        {errors.password && (
          <span className="error-text">❌ {errors.password}</span>
        )}
      </div>
    </>
  );
}
export default AccountData;