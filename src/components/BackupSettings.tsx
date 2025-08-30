import React, { useState } from "react";
import {
  Cloud,
  Clock,
  Shield,
  Smartphone,
  Settings,
  ChevronRight,
  Check,
  AlertCircle,
  Wifi,
  Battery,
  HardDrive,
} from "lucide-react";
const BackupSettings = () => {
  const [backupFrequency, setBackupFrequency] = useState("daily");
  const [defaultProvider, setDefaultProvider] = useState("mega");
  const [wifiOnly, setWifiOnly] = useState(true);
  const [batteryOptimization, setBatteryOptimization] = useState(true);
  const [whatsappBackup, setWhatsappBackup] = useState(false);
  const cloudProviders = [
    {
      id: "mega",
      name: "Mega.nz",
      icon: "🔒",
      storage: "20 GB Free",
      recommended: true,
    },
    {
      id: "gdrive",
      name: "Google Drive",
      icon: "📁",
      storage: "15 GB Free",
      recommended: false,
    },
    {
      id: "dropbox",
      name: "Dropbox",
      icon: "📦",
      storage: "2 GB Free",
      recommended: false,
    },
    {
      id: "onedrive",
      name: "OneDrive",
      icon: "☁️",
      storage: "5 GB Free",
      recommended: false,
    },
  ];
  const backupTypes = [
    {
      id: "photos",
      name: "Photos & Videos",
      description: "Camera roll, screenshots, downloaded images",
      enabled: true,
      size: "1.2 TB",
    },
    {
      id: "documents",
      name: "Documents",
      description: "PDFs, text files, spreadsheets",
      enabled: true,
      size: "245 MB",
    },
    {
      id: "apps",
      name: "App Data",
      description: "App settings, preferences, local databases",
      enabled: true,
      size: "890 MB",
    },
    {
      id: "whatsapp",
      name: "WhatsApp Chats",
      description: "Chat history, media, voice messages",
      enabled: whatsappBackup,
      size: "156 MB",
      experimental: true,
    },
    {
      id: "contacts",
      name: "Contacts & Calendar",
      description: "Phone contacts, calendar events",
      enabled: true,
      size: "12 MB",
    },
  ];
  return (
    <div className="space-y-8">
      {" "}
      {/* Header */}{" "}
      <div>
        {" "}
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          Backup Settings
        </h2>{" "}
        <p className="text-slate-600">
          Configure your automated backup preferences and security settings
        </p>{" "}
      </div>{" "}
      {/* Backup Frequency */}{" "}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        {" "}
        <div className="flex items-center space-x-3 mb-6">
          {" "}
          <Clock className="w-6 h-6 text-blue-600" />{" "}
          <h3 className="text-lg font-semibold text-slate-900">
            Backup Frequency
          </h3>{" "}
        </div>{" "}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {" "}
          {["daily", "weekly", "manual"].map((frequency) => (
            <button
              key={frequency}
              onClick={() => setBackupFrequency(frequency)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                backupFrequency === frequency
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-slate-200 hover:border-slate-300 text-slate-700"
              }`}
            >
              {" "}
              <div className="text-center">
                {" "}
                <div className="font-semibold capitalize mb-1">
                  {frequency}
                </div>{" "}
                <div className="text-sm opacity-75">
                  {" "}
                  {frequency === "daily" && "Every 24 hours"}{" "}
                  {frequency === "weekly" && "Every 7 days"}{" "}
                  {frequency === "manual" && "On demand only"}{" "}
                </div>{" "}
              </div>{" "}
            </button>
          ))}{" "}
        </div>{" "}
      </div>{" "}
      {/* Cloud Providers */}{" "}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        {" "}
        <div className="flex items-center space-x-3 mb-6">
          {" "}
          <Cloud className="w-6 h-6 text-blue-600" />{" "}
          <h3 className="text-lg font-semibold text-slate-900">
            Default Cloud Provider
          </h3>{" "}
        </div>{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {" "}
          {cloudProviders.map((provider) => (
            <button
              key={provider.id}
              onClick={() => setDefaultProvider(provider.id)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 relative ${
                defaultProvider === provider.id
                  ? "border-blue-500 bg-blue-50"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              {" "}
              {provider.recommended && (
                <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  {" "}
                  Recommended{" "}
                </div>
              )}{" "}
              <div className="flex items-center space-x-3">
                {" "}
                <span className="text-2xl">{provider.icon}</span>{" "}
                <div className="text-left">
                  {" "}
                  <div className="font-semibold text-slate-900">
                    {provider.name}
                  </div>{" "}
                  <div className="text-sm text-slate-500">
                    {provider.storage}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              {defaultProvider === provider.id && (
                <Check className="w-5 h-5 text-blue-600 absolute top-4 right-4" />
              )}{" "}
            </button>
          ))}{" "}
        </div>{" "}
      </div>{" "}
      {/* Backup Types */}{" "}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        {" "}
        <div className="flex items-center space-x-3 mb-6">
          {" "}
          <HardDrive className="w-6 h-6 text-blue-600" />{" "}
          <h3 className="text-lg font-semibold text-slate-900">
            Data Types to Backup
          </h3>{" "}
        </div>{" "}
        <div className="space-y-4">
          {" "}
          {backupTypes.map((type) => (
            <div
              key={type.id}
              className="flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors duration-150"
            >
              {" "}
              <div className="flex items-center space-x-4">
                {" "}
                <div className="flex-shrink-0">
                  {" "}
                  <input
                    type="checkbox"
                    checked={type.enabled}
                    onChange={(e) => {
                      if (type.id === "whatsapp") {
                        setWhatsappBackup(e.target.checked);
                      }
                    }}
                    className="w-5 h-5 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                  />{" "}
                </div>{" "}
                <div>
                  {" "}
                  <div className="flex items-center space-x-2">
                    {" "}
                    <span className="font-medium text-slate-900">
                      {type.name}
                    </span>{" "}
                    {type.experimental && (
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full border border-orange-200">
                        {" "}
                        Beta{" "}
                      </span>
                    )}{" "}
                  </div>{" "}
                  <p className="text-sm text-slate-500">
                    {type.description}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div className="text-right">
                {" "}
                <div className="text-sm font-medium text-slate-900">
                  {type.size}
                </div>{" "}
                <ChevronRight className="w-4 h-4 text-slate-400 mt-1" />{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
      {/* Advanced Settings */}{" "}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        {" "}
        <div className="flex items-center space-x-3 mb-6">
          {" "}
          <Settings className="w-6 h-6 text-blue-600" />{" "}
          <h3 className="text-lg font-semibold text-slate-900">
            Advanced Settings
          </h3>{" "}
        </div>{" "}
        <div className="space-y-6">
          {" "}
          <div className="flex items-center justify-between">
            {" "}
            <div className="flex items-center space-x-3">
              {" "}
              <Wifi className="w-5 h-5 text-slate-500" />{" "}
              <div>
                {" "}
                <div className="font-medium text-slate-900">
                  WiFi Only Backups
                </div>{" "}
                <div className="text-sm text-slate-500">
                  Only backup when connected to WiFi
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <button
              onClick={() => setWifiOnly(!wifiOnly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                wifiOnly ? "bg-blue-600" : "bg-slate-300"
              }`}
            >
              {" "}
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                  wifiOnly ? "translate-x-6" : "translate-x-1"
                }`}
              />{" "}
            </button>{" "}
          </div>{" "}
          <div className="flex items-center justify-between">
            {" "}
            <div className="flex items-center space-x-3">
              {" "}
              <Battery className="w-5 h-5 text-slate-500" />{" "}
              <div>
                {" "}
                <div className="font-medium text-slate-900">
                  Battery Optimization
                </div>{" "}
                <div className="text-sm text-slate-500">
                  Pause backups when battery is low
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <button
              onClick={() => setBatteryOptimization(!batteryOptimization)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                batteryOptimization ? "bg-blue-600" : "bg-slate-300"
              }`}
            >
              {" "}
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                  batteryOptimization ? "translate-x-6" : "translate-x-1"
                }`}
              />{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* WhatsApp Integration Notice */}{" "}
      {whatsappBackup && (
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
          {" "}
          <div className="flex items-start space-x-3">
            {" "}
            <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />{" "}
            <div>
              {" "}
              <h4 className="font-semibold text-orange-900 mb-2">
                WhatsApp Backup - Beta Feature
              </h4>{" "}
              <p className="text-sm text-orange-800 mb-3">
                {" "}
                WhatsApp backup is currently in beta. This feature requires
                additional permissions and may have limitations due to
                WhatsApp's security policies.{" "}
              </p>{" "}
              <div className="text-sm text-orange-700">
                {" "}
                <strong>Requirements:</strong>{" "}
                <ul className="list-disc list-inside mt-1 space-y-1">
                  {" "}
                  <li>Android 8.0 or higher</li>{" "}
                  <li>WhatsApp version 2.23.0 or later</li>{" "}
                  <li>Storage access permissions</li>{" "}
                </ul>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      )}{" "}
      {/* Save Button */}{" "}
      <div className="flex justify-end">
        {" "}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
          {" "}
          <Shield className="w-5 h-5" /> <span>Save Settings</span>{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
};
export default BackupSettings;
