import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { io } from 'socket.io-client';

export const Notification = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const socket = io('http://localhost:5000'); // Connect to the server

        // Listen for notification events from the server
        socket.on('message', (notification) => {
            console.log("Received notification:", notification);
            setNotifications((prevNotifications) => [...prevNotifications, notification]);
        });

        // Clean up on component unmount
        return () => {
            socket.disconnect();
        };
    }, []);

    useEffect(() => {
        // Show toast for each notification
        notifications.forEach((notification) => {
            toast.custom((t) => (
                <div
                    className={`max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 ${notification.type}`}
                >
                    <div className="flex-1 w-0 p-4">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 pt-0.5">
                                <img
                                    className="h-10 w-10 rounded-full"
                                    src="/images/logo.png"
                                    alt="Avatar"
                                />
                            </div>
                            <div className="ml-3 flex-1">
                                <p className="text-sm font-medium text-gray-900">
                                    {notification.title || "Notification"}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                    {notification.message}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex border-l border-gray-200">
                        <button
                            onClick={() => { toast.dismiss(t.id); }}
                            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Close
                        </button>
                    </div>
                </div>
            ));
        }, { duration: "Infinity" });
    }, [notifications]);


    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={true}
            />
        </>
    );
}
