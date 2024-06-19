
import { useState } from "react";

export const SignUp = ({ onSignup, users }) => {
    const [user, setUser] = useState({
        id: "",
        name: "",
        surname: "",
        login: "",
        password: ""
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.id == "" && user.name == "" && user.surname == "" && user.login == "" && user.password == "") {
            return setError("Please fill all field")
        }
        if (!user.id.trim()) {
            return setError("Please fill your id");
        }
        if (!user.name.trim()) {
            return setError("Please fill your name");
        }
        if (!user.surname.trim()) {
            return setError("Please fill your surname");
        }

        if (!user.login.trim()) {
            return setError("Please fill your login");
        }
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(user.login)) {
            return setError("Please enter a valid email address");
        }
        if (users.some(u => u.login === user.login)) {
            return setError("This login is already taken");
        }

        if (!user.password.trim()) {
            return setError("Please fill your password");
        }
        if (user.password.length < 6) {
            return setError("Password should be a little longer");
        }
        onSignup(user);
        setUser({ id: "", name: "", surname: "", login: "", password: "" });
        setError("")
        setSuccess("Sign up successful!")
        setSuccess("")
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && <p style={{ color: "green" }}>{success}</p>}
                <input
                    placeholder="id"
                    value={user.id}
                    onChange={(e) => setUser({ ...user, id: e.target.value })}
                />
                <input
                    placeholder="name"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
                <input
                    placeholder="surname"
                    value={user.surname}
                    onChange={(e) => setUser({ ...user, surname: e.target.value })}
                />
                <input
                    placeholder="login"
                    value={user.login}
                    onChange={(e) => setUser({ ...user, login: e.target.value })}
                />
                <input
                    placeholder="password"

                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
                <button>Sign up</button>
            </form>
        </div>
    );
};