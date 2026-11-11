import { Routes, Route, Navigate } from 'react-router-dom';

// Placeholder pages — replace with real implementations
const Dashboard = () => <div>Dashboard — coming soon</div>;
const Donors = () => <div>Donors — coming soon</div>;
const Donations = () => <div>Donations — coming soon</div>;
const Campaigns = () => <div>Campaigns — coming soon</div>;
const Zakat = () => <div>Zakat — coming soon</div>;
const PrayerTimes = () => <div>Prayer Times — coming soon</div>;
const School = () => <div>School & Maktab — coming soon</div>;
const Settings = () => <div>Settings — coming soon</div>;

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/donors" element={<Donors />} />
      <Route path="/donations" element={<Donations />} />
      <Route path="/campaigns" element={<Campaigns />} />
      <Route path="/zakat" element={<Zakat />} />
      <Route path="/prayer-times" element={<PrayerTimes />} />
      <Route path="/school" element={<School />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}
