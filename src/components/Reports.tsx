import React, { useState } from "react";
import {
  BarChart3,
  Download,
  Calendar,
  Filter,
  TrendingUp,
  TrendingDown,
  FileText,
  Image,
  Video,
  MessageSquare,
  Users,
  Clock,
  CheckCircle,
  AlertTriangle,
  XCircle,
} from "lucide-react";
const Reports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("7d");
  const [selectedDevice, setSelectedDevice] = useState("all");
  const periods = [
    { id: "24h", label: "Last 24 Hours" },
    { id: "7d", label: "Last 7 Days" },
    { id: "30d", label: "Last 30 Days" },
    { id: "90d", label: "Last 90 Days" },
  ];
  const devices = [
    { id: "all", label: "All Devices" },
    { id: "samsung", label: "Samsung Galaxy S23" },
    { id: "iphone", label: "iPhone 15 Pro" },
    { id: "oneplus", label: "OnePlus 11" },
  ];
  const backupMetrics = [
    {
      label: "Total Backups",
      value: "1,247",
      change: "+12%",
      trend: "up",
      icon: Download,
      color: "blue",
    },
    {
      label: "Success Rate",
      value: "98.2%",
      change: "+0.8%",
      trend: "up",
      icon: CheckCircle,
      color: "green",
    },
    {
      label: "Failed Backups",
      value: "23",
      change: "-15%",
      trend: "down",
      icon: XCircle,
      color: "red",
    },
    {
      label: "Avg. Backup Time",
      value: "4.2 min",
      change: "-8%",
      trend: "down",
      icon: Clock,
      color: "purple",
    },
  ];
  const dataTypeBreakdown = [
    {
      type: "Photos",
      icon: Image,
      size: "1.2 TB",
      percentage: 67,
      count: "12,450 files",
    },
    {
      type: "Videos",
      icon: Video,
      size: "456 GB",
      percentage: 25,
      count: "1,234 files",
    },
    {
      type: "Documents",
      icon: FileText,
      size: "89 GB",
      percentage: 5,
      count: "5,678 files",
    },
    {
      type: "WhatsApp",
      icon: MessageSquare,
      size: "34 GB",
      percentage: 2,
      count: "89,012 messages",
    },
    {
      type: "Other",
      icon: FileText,
      size: "18 GB",
      percentage: 1,
      count: "2,345 files",
    },
  ];
  const recentActivity = [
    {
      device: "Samsung Galaxy S23",
      action: "Full backup completed",
      timestamp: "2 hours ago",
      status: "success",
      details: "1.2 GB backed up to Mega.nz",
    },
    {
      device: "iPhone 15 Pro",
      action: "Incremental backup completed",
      timestamp: "4 hours ago",
      status: "success",
      details: "245 MB backed up to Google Drive",
    },
    {
      device: "OnePlus 11",
      action: "WhatsApp backup started",
      timestamp: "6 hours ago",
      status: "in-progress",
      details: "Processing chat history...",
    },
    {
      device: "Samsung Galaxy S23",
      action: "Backup failed",
      timestamp: "1 day ago",
      status: "error",
      details: "Network timeout - will retry automatically",
    },
  ];
  return (
    <div className="space-y-8">
      {" "}
      {/* Header with Filters */}{" "}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {" "}
        <div>
          {" "}
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Backup Reports
          </h2>{" "}
          <p className="text-slate-600">
            Detailed analytics and insights for your backup operations
          </p>{" "}
        </div>{" "}
        <div className="flex items-center space-x-4">
          {" "}
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {" "}
            {periods.map((period) => (
              <option key={period.id} value={period.id}>
                {period.label}
              </option>
            ))}{" "}
          </select>{" "}
          <select
            value={selectedDevice}
            onChange={(e) => setSelectedDevice(e.target.value)}
            className="px-4 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {" "}
            {devices.map((device) => (
              <option key={device.id} value={device.id}>
                {device.label}
              </option>
            ))}{" "}
          </select>{" "}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
            {" "}
            <Download className="w-4 h-4" /> <span>Export</span>{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
      {/* Metrics Cards */}{" "}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {" "}
        {backupMetrics.map((metric, index) => {
          const Icon = metric.icon;
          const isPositive =
            metric.trend === "up" && !metric.label.includes("Failed");
          const isNegative =
            metric.trend === "up" && metric.label.includes("Failed");
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-slate-200 p-6"
            >
              {" "}
              <div className="flex items-center justify-between mb-4">
                {" "}
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${metric.color}-50`}
                >
                  {" "}
                  <Icon className={`w-6 h-6 text-${metric.color}-600`} />{" "}
                </div>{" "}
                <div
                  className={`flex items-center space-x-1 text-sm ${
                    isPositive
                      ? "text-green-600"
                      : isNegative
                      ? "text-red-600"
                      : "text-slate-500"
                  }`}
                >
                  {" "}
                  {metric.trend === "up" ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}{" "}
                  <span>{metric.change}</span>{" "}
                </div>{" "}
              </div>{" "}
              <div>
                {" "}
                <div className="text-2xl font-bold text-slate-900 mb-1">
                  {metric.value}
                </div>{" "}
                <div className="text-sm text-slate-600">{metric.label}</div>{" "}
              </div>{" "}
            </div>
          );
        })}{" "}
      </div>{" "}
      {/* Data Type Breakdown */}{" "}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        {" "}
        <h3 className="text-lg font-semibold text-slate-900 mb-6">
          Data Type Breakdown
        </h3>{" "}
        <div className="space-y-4">
          {" "}
          {dataTypeBreakdown.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center space-x-4">
                {" "}
                <div className="flex items-center space-x-3 flex-1">
                  {" "}
                  <Icon className="w-5 h-5 text-slate-500" />{" "}
                  <div>
                    {" "}
                    <div className="font-medium text-slate-900">
                      {item.type}
                    </div>{" "}
                    <div className="text-sm text-slate-500">{item.count}</div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex items-center space-x-4 flex-1">
                  {" "}
                  <div className="flex-1">
                    {" "}
                    <div className="flex justify-between text-sm mb-1">
                      {" "}
                      <span className="text-slate-600">{item.size}</span>{" "}
                      <span className="text-slate-900 font-medium">
                        {item.percentage}%
                      </span>{" "}
                    </div>{" "}
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      {" "}
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${item.percentage}%` }}
                      ></div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            );
          })}{" "}
        </div>{" "}
      </div>{" "}
      {/* Recent Activity */}{" "}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        {" "}
        <div className="p-6 border-b border-slate-200">
          {" "}
          <h3 className="text-lg font-semibold text-slate-900">
            Recent Activity
          </h3>{" "}
        </div>{" "}
        <div className="divide-y divide-slate-200">
          {" "}
          {recentActivity.map((activity, index) => (
            <div
              key={index}
              className="p-6 hover:bg-slate-50 transition-colors duration-150"
            >
              {" "}
              <div className="flex items-start space-x-4">
                {" "}
                <div className="flex-shrink-0 mt-1">
                  {" "}
                  {activity.status === "success" && (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  )}{" "}
                  {activity.status === "in-progress" && (
                    <Clock className="w-5 h-5 text-blue-500 animate-spin" />
                  )}{" "}
                  {activity.status === "error" && (
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  )}{" "}
                </div>{" "}
                <div className="flex-1">
                  {" "}
                  <div className="flex items-center justify-between">
                    {" "}
                    <h4 className="font-medium text-slate-900">
                      {activity.action}
                    </h4>{" "}
                    <span className="text-sm text-slate-500">
                      {activity.timestamp}
                    </span>{" "}
                  </div>{" "}
                  <p className="text-sm text-slate-600 mt-1">
                    {activity.device}
                  </p>{" "}
                  <p className="text-sm text-slate-500 mt-1">
                    {activity.details}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default Reports;
