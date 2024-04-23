import React from 'react';
import "./Dashboard.css";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
    return (
        <div className="dashboard-content">
            <Sidebar />
            <div className="horizontal-box-container">
                <div className="box item-box">
                    <h2>Items</h2>
                </div>

                <div className="box suppliers-box">
                    <h2>Suppliers</h2>
                </div>

                <div className="box expenses-box">
                    <h2>Expenses</h2>
                </div>
            </div>

            <div className="box">
                <h2>Inventory Tracking</h2>
                <p>Create a dedicated section within the dashboard to monitor inventory levels, product categories, and stock movements.</p>
            </div>

            <div className="box">
                <h2>Expense Tracking</h2>
                <p>Establish a separate section for tracking expenses related to inventory management, procurement, and operational costs.</p>
            </div>

            <div className="box">
                <h2>Suppliers Tracking</h2>
                <p>Develop a specific section for tracking suppliers, supplier performance metrics, and transaction history.</p>
            </div>

            <div className="box">
                <h2>Integration and Automation</h2>
                <p>Integrate the dashboard with other business systems and software applications.</p>
            </div>

            <div className="box">
                <h2>Customization and Personalization</h2>
                <p>Offer customization options for users to personalise their dashboard experience.</p>
            </div>

            <div className="box">
                <h2>Responsive Design and Accessibility</h2>
                <p>Ensure the dashboard design is responsive and accessible across different devices, screen sizes, and web browsers.</p>
            </div>
        </div>
    );
}

export default Dashboard;
