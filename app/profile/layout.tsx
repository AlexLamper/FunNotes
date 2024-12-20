import { ReactNode } from 'react';

export default function ProfileLayout({ children }: { children: ReactNode }) {
  return (
    <div className="profile-layout flex">
      <aside className="profile-sidebar w-1/4 bg-gray-200 p-4">
        <h2 className="text-xl font-semibold">Profile Menu</h2>
        <ul>
          <li><a href="/profile">Overview</a></li>
          <li><a href="/profile/settings">Settings</a></li>
          <li><a href="/profile/activity">Activity</a></li>
        </ul>
      </aside>
      <main className="profile-main w-3/4 p-6">
        {children}
      </main>
    </div>
  );
}
