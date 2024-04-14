import React, { useState, useEffect } from "react";
import axiosClient from "../api/axiosClient";
// import { navigate } from "@reach/router";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}
const LogIn: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
    const [modalVisible, setModalVisible] = useState<boolean>(isOpen);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const [showPass, setShowPass] = useState<boolean>(false);

    useEffect(() => {
        setModalVisible(isOpen);
    }, [isOpen]);

    const handleCloseModal = () => {
        setModalVisible(false);
        onClose();
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        setEmailError("");
        setPasswordError("");

        const data = {
            email: email,
            password: password,
        };

        try {
            const response = await axiosClient.post("/login", data);

            if (response) {
                // Assuming setUser and setToken are defined elsewhere
                // setUser(response.data.user);
                // setToken(response.data.token);

                setEmail("");
                setPassword("");
                setShowPass(false);

                // if (response.data.user.user_type === "0") {
                //     navigate("/home");
                // } else if (response.data.user.user_type === "1") {
                //     navigate("/admin/dashboard");
                // }
            }
        } catch (error: any) {
            // Explicitly type the error object
            console.log(error.response?.data); // Access response data if available
            setEmailError(error.response?.data?.errors?.email); // Use optional chaining
            setPasswordError(error.response?.data?.errors?.password); // Use optional chaining
        }
    };

    return (
        <div
            className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-50 ${
                modalVisible ? "visible" : "hidden"
            }`}
        >
            <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex justify-end">
                    <button
                        className="text-gray-600 hover:text-gray-800"
                        onClick={handleCloseModal}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div className="modal-body">
                    <div
                        className={`modal ${
                            modalVisible ? "visible" : "hidden"
                        }`}
                    >
                        <div className="max-w-2xl mx-auto">
                            <div
                                className={`overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center ${
                                    modalVisible ? "visible" : "hidden"
                                }`}
                            >
                                <div className="relative w-full max-w-md px-4 h-full md:h-auto">
                                    <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
                                        <div className="flex justify-end p-2">
                                            <button
                                                type="button"
                                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                                                onClick={handleCloseModal}
                                            >
                                                <svg
                                                    className="w-5 h-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <form
                                            className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8"
                                            action="#"
                                            onSubmit={handleLogin}
                                        >
                                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                                Sign in to our platform
                                            </h3>
                                            {/* Input fields for email and password */}
                                            <div>
                                                <label
                                                    htmlFor="email"
                                                    className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                                                >
                                                    Your email
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                    placeholder="name@company.com"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="password"
                                                    className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                                                >
                                                    Your password
                                                </label>
                                                {/* <input
                                                    type={showPass ? "text" : "password"}
                                                    name="password"
                                                    id="password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    placeholder="••••••••"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                    required
                                                />
                                                <button onClick={() => setShowPass(!showPass)}>
                                                    {showPass ? "Hide Password" : "Show Password"}
                                                </button> */}
                                                <input
                                                    type={
                                                        showPass
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    name="password"
                                                    id="password"
                                                    value={password}
                                                    onChange={(e) =>
                                                        setPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="••••••••"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                    required
                                                />
                                                <button
                                                    onClick={() =>
                                                        setShowPass(!showPass)
                                                    }
                                                >
                                                    {showPass
                                                        ? "Hide Password"
                                                        : "Show Password"}
                                                </button>
                                            </div>
                                            {/* Remember me checkbox and Lost Password link */}
                                            <div className="flex justify-between">
                                                <div className="flex items-start">
                                                    <div className="flex items-center h-5">
                                                        <input
                                                            id="remember"
                                                            aria-describedby="remember"
                                                            type="checkbox"
                                                            className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="text-sm ml-3">
                                                        <label
                                                            htmlFor="remember"
                                                            className="font-medium text-gray-900 dark:text-gray-300"
                                                        >
                                                            Remember me
                                                        </label>
                                                    </div>
                                                </div>
                                                <a
                                                    href="#"
                                                    className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                                                >
                                                    Lost Password?
                                                </a>
                                            </div>
                                            {/* Login button */}
                                            <button
                                                type="submit"
                                                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            >
                                                Login to your account
                                            </button>
                                            {/* Link to create account */}
                                            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                                Not registered?{" "}
                                                <a
                                                    href="#"
                                                    className="text-blue-700 hover:underline dark:text-blue-500"
                                                >
                                                    Create account
                                                </a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-5">
                                This modal element is part of a larger,
                                open-source library of Tailwind CSS components.
                                Learn more by going to the official{" "}
                                <a
                                    className="text-blue-600 hover:underline"
                                    href="#"
                                    target="_blank"
                                >
                                    Flowbite Documentation
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {emailError && <div className="error-message">{emailError}</div>}
            {passwordError && (
                <div className="error-message">{passwordError}</div>
            )}
        </div>
    );
};

export default LogIn;
