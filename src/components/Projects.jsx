import React from 'react'
import ranger from '../assets/ranger.png'
import iby from '../assets/iby.jpeg'
import cybersurance from '../assets/cybersurance.jpeg'

const Projects = () => {
  return (
    <div className="py-10 text-white h-auto" id='projects'>
        <div className="py-6 max-w-[1200px] mx-auto">
            <div className="mx-auto px-4 md:px-9 m-1">
                <div className="mb-4 flex items-center justify-between gap-8">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl lg:text-3xl text-white">
                            My <span>Projects</span>
                        </h2>
                        <p className="text-gray-500">
                            These are my latest Projects
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 m-3">
                <div className="bg-[#232325] border-[#A3099C] border rounded-lg overflow-hidden">
                    <div className="p-4 sm:p-6">
                        <h3 className="text-lg font-semibold text-white">Accepterars</h3>
                        <p className="text-sm text-gray-400 mt-2">
                            Accepterars is a modern multi-tenant Laravel 11 application with Nexi Booking
                            payment gateway integration, built as a full SPA using Inertia.js + React.
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-400 mt-3 space-y-1">
                            <li>Secure Payments via Nexi Booking</li>
                            <li>Sanctum Authentication + Spatie Roles/Permissions (Admin, Contractor, Site Engineer, Client)</li>
                            <li>Redis Caching & Queued Jobs for high performance</li>
                            <li>PDF Exports & Analytics Dashboards with approval trends</li>
                            <li>User Management – soft delete, suspension, bulk operations</li>
                            <li>In-app notifications with real-time updates</li>
                            <li>Implemented a secure admin panel and RESTful API with Laravel Sanctum</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-[#232325] border-[#A3099C] border rounded-lg overflow-hidden">
                    <div className="p-4 sm:p-6">
                        <h3 className="text-lg font-semibold text-white">Ranger Renovation</h3>
                        <p className="text-sm text-gray-400 mt-2">
                            Ranger Renovation is designed to manage residential and commercial renovation projects.
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-400 mt-3 space-y-1">
                            <li>Sanctum Authentication + Spatie Roles/Permissions (Admin, Contractor, Site Engineer, Client)</li>
                            <li>Project Collaboration – tasks, daily logs (text, photo, video), real-time issue reporting with geo-tagging</li>
                            <li>Contractor Management – bids, work orders, and scheduling of site visits</li>
                            <li>Redis Caching for performance + DB-driven notifications</li>
                            <li>Admin Panel – oversee projects, contractors, resources, and compliance</li>
                            <li>Mobile-Friendly REST API for field access and third-party integrations</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-[#232325] border-[#A3099C] border rounded-lg overflow-hidden">
                <div className="p-5 sm:p-6">
                    <h3 className="text-lg font-semibold text-white">IBY Outlet</h3>
                    <p className="text-sm text-gray-400 mt-2">
                        A subscription-based platform that manages recurring payments, plan cycles, and billing with 
                        Laravel + React + PayPal Braintree.
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-400 mt-3 space-y-1">
                        <li> Multiple Subscription Plans – Monthly, Quarterly, Yearly</li>
                        <li> Recurring Payments & Invoices</li>
                        <li> Trial Periods & Easy Plan Upgrades/Downgrades</li>
                        <li> Secure Integration with PayPal Braintree</li>
                        <li> Dashboard for tracking active users & renewals</li>
                        <li> Email Notifications for billing, renewal & expiry alerts</li>
                    </ul>
                </div>
                </div>

            </div>
        </div>
    </div>
    
  )
}

export default Projects
