import React, { useState } from "react";
import {
  Smartphone,
  Tablet,
  Monitor,
  Plus,
  MoreVertical,
  CheckCircle,
  AlertCircle,
  Clock,
  Wifi,
  WifiOff,
  Battery,
  HardDrive,
  Download,
  Settings,
  Trash2,
} from "lucide-react";
const DeviceManagement = () => {
  const [showAddDevice, setShowAddDevice] = useState(false);
  const devices = [
    {
      id: "1",
      name: "Samsung Galaxy S23",
      type: "smartphone",
      os: "Android 14",
      lastBackup: "2 hours ago",
      status: "online",
      batteryLevel: 78,
      storageUsed: "45.2 GB",
      backupSize: "1.2 GB",
      isConnected: true,
      location: "New York, NY",
    },
    {
      id: "2",
      name: "iPhone 15 Pro",
      type: "smartphone",
      os: "iOS 17.2",
      lastBackup: "4 hours ago",
      status: "online",
      batteryLevel: 92,
      storageUsed: "128 GB",
      backupSize: "890 MB",
      isConnected: true,
      location: "New York, NY",
    },
    {
      id: "3",
      name: "OnePlus 11",
      type: "smartphone",
      os: "Android 13",
      lastBackup: "1 day ago",
      status: "offline",
      batteryLevel: 23,
      storageUsed: "67.8 GB",
      backupSize: "1.8 GB",
      isConnected: false,
      location: "Last seen: San Francisco, CA",
    },
  ];
  const getDeviceIcon = (type: string) => {
    switch (type) {
      case "smartphone":
        return Smartphone;
      case "tablet":
        return Tablet;
      case "desktop":
        return Monitor;
      default:
        return Smartphone;
    }
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "text-green-600 bg-green-50 border-green-200";
      case "offline":
        return "text-red-600 bg-red-50 border-red-200";
      case "syncing":
        return "text-blue-600 bg-blue-50 border-blue-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };
  const getBatteryColor = (level: number) => {
    if (level > 50) return "text-green-600";
    if (level > 20) return "text-orange-600";
    return "text-red-600";
  };
  return (
    <div className="space-y-8">
      {" "}
      {/* Header */}{" "}
      <div className="flex items-center justify-between">
        {" "}
        <div>
          {" "}
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Device Management
          </h2>{" "}
          <p className="text-slate-600">
            Monitor and manage all your connected devices
          </p>{" "}
        </div>{" "}
        <button
          onClick={() => setShowAddDevice(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
        >
          {" "}
          <Plus className="w-5 h-5" /> <span>Add Device</span>{" "}
        </button>{" "}
      </div>{" "}
      {/* Devices Grid */}{" "}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {" "}
        {devices.map((device) => {
          const DeviceIcon = getDeviceIcon(device.type);
          return (
            <div
              key={device.id}
              className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow duration-200"
            >
              {" "}
              {/* Device Header */}{" "}
              <div className="flex items-center justify-between mb-4">
                {" "}
                <div className="flex items-center space-x-3">
                  {" "}
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                    {" "}
                    <DeviceIcon className="w-6 h-6 text-slate-600" />{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <h3 className="font-semibold text-slate-900">
                      {device.name}
                    </h3>{" "}
                    <p className="text-sm text-slate-500">{device.os}</p>{" "}
                  </div>{" "}
                </div>{" "}
                <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors duration-150">
                  {" "}
                  <MoreVertical className="w-4 h-4 text-slate-500" />{" "}
                </button>{" "}
              </div>{" "}
              {/* Status */}{" "}
              <div className="flex items-center justify-between mb-4">
                {" "}
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                    device.status
                  )}`}
                >
                  {" "}
                  {device.status}{" "}
                </span>{" "}
                <div className="flex items-center space-x-2">
                  {" "}
                  {device.isConnected ? (
                    <Wifi className="w-4 h-4 text-green-500" />
                  ) : (
                    <WifiOff className="w-4 h-4 text-red-500" />
                  )}{" "}
                  <Battery
                    className={`w-4 h-4 ${getBatteryColor(
                      device.batteryLevel
                    )}`}
                  />{" "}
                  <span
                    className={`text-sm ${getBatteryColor(
                      device.batteryLevel
                    )}`}
                  >
                    {" "}
                    {device.batteryLevel}%{" "}
                  </span>{" "}
                </div>{" "}
              </div>{" "}
              {/* Stats */}{" "}
              <div className="space-y-3 mb-4">
                {" "}
                <div className="flex items-center justify-between text-sm">
                  {" "}
                  <span className="text-slate-600">Last Backup</span>{" "}
                  <span className="font-medium text-slate-900">
                    {device.lastBackup}
                  </span>{" "}
                </div>{" "}
                <div className="flex items-center justify-between text-sm">
                  {" "}
                  <span className="text-slate-600">Storage Used</span>{" "}
                  <span className="font-medium text-slate-900">
                    {device.storageUsed}
                  </span>{" "}
                </div>{" "}
                <div className="flex items-center justify-between text-sm">
                  {" "}
                  <span className="text-slate-600">Backup Size</span>{" "}
                  <span className="font-medium text-slate-900">
                    {device.backupSize}
                  </span>{" "}
                </div>{" "}
                <div className="flex items-center justify-between text-sm">
                  {" "}
                  <span className="text-slate-600">Location</span>{" "}
                  <span className="font-medium text-slate-900 text-right">
                    {device.location}
                  </span>{" "}
                </div>{" "}
              </div>{" "}
              {/* Actions */}{" "}
              <div className="flex space-x-2">
                {" "}
                <button className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150 flex items-center justify-center space-x-2">
                  {" "}
                  <Download className="w-4 h-4" /> <span>Backup Now</span>{" "}
                </button>{" "}
                <button className="px-3 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-lg transition-colors duration-150">
                  {" "}
                  <Settings className="w-4 h-4" />{" "}
                </button>{" "}
              </div>{" "}
            </div>
          );
        })}{" "}
      </div>{" "}
      {/* Device Statistics */}{" "}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        {" "}
        <h3 className="text-lg font-semibold text-slate-900 mb-6">
          Device Statistics
        </h3>{" "}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {" "}
          <div className="text-center">
            {" "}
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              {" "}
              <CheckCircle className="w-8 h-8 text-green-600" />{" "}
            </div>{" "}
            <div className="text-2xl font-bold text-slate-900 mb-1">2</div>{" "}
            <div className="text-sm text-slate-600">Online Devices</div>{" "}
          </div>{" "}
          <div className="text-center">
            {" "}
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              {" "}
              <Clock className="w-8 h-8 text-orange-600" />{" "}
            </div>{" "}
            <div className="text-2xl font-bold text-slate-900 mb-1">1</div>{" "}
            <div className="text-sm text-slate-600">Pending Backups</div>{" "}
          </div>{" "}
          <div className="text-center">
            {" "}
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              {" "}
              <HardDrive className="w-8 h-8 text-blue-600" />{" "}
            </div>{" "}
            <div className="text-2xl font-bold text-slate-900 mb-1">3.9 GB</div>{" "}
            <div className="text-sm text-slate-600">Total Backup Size</div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* Add Device Modal */}{" "}
      {showAddDevice && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {" "}
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full mx-4 p-6">
            {" "}
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Add New Device
            </h3>{" "}
            <p className="text-slate-600 mb-6">
              {" "}
              Download the SecureVault app on your device and scan the QR code
              to connect.{" "}
            </p>{" "}
            <div className="bg-slate-100 rounded-lg p-8 text-center mb-6">
              {" "}
              <div className="w-32 h-32 bg-white rounded-lg mx-auto flex items-center justify-center">
                {" "}
                <span className="text-slate-400">QR Code</span>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex space-x-3">
              {" "}
              <button
                onClick={() => setShowAddDevice(false)}
                className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors duration-150"
              >
                {" "}
                Cancel{" "}
              </button>{" "}
              <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-150">
                {" "}
                Generate Code{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      )}{" "}
    </div>
  );
};
export default DeviceManagement;
