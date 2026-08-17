import { useState } from 'react'
import { FaXTwitter } from 'react-icons/fa6'
import ActionModal from '../components/ActionModal'
import AppShell from '../components/AppShell'
import BackButton from '../components/BackButton'
import ProfileRow from '../components/ProfileRow'
import type { Profile } from '../types/app'

interface MoreViewProps {
  profile: Profile
  onBack: () => void
  onLogout: () => void
}

export default function MoreView({ profile, onBack, onLogout }: MoreViewProps) {
  const [deleteOpen, setDeleteOpen] = useState(false)

  return (
    <AppShell>
      <section className="more-layout mx-auto h-full w-full">
        <BackButton onClick={onBack} />
        <h1 className="more-title font-normal tracking-[-0.025em]">More</h1>

        <div className="more-list">
          <ProfileRow icon="phone" label="Phone Number" value={profile.phoneNumber} />
          <ProfileRow icon="calendar" label="Joined On" value={profile.joinedOn} />
          <ProfileRow
            icon="mail"
            label="Contact Us"
            onClick={() => { window.location.href = `mailto:${profile.contactEmail}` }}
          />
          <ProfileRow
            icon="bulb"
            label={
              <span className="flex items-center gap-[0.28em]">
                Follow Our Updates On
                <FaXTwitter className="x-icon shrink-0" />
              </span>
            }
            onClick={() => window.open(profile.xHandle, '_blank', 'noopener,noreferrer')}
          />
          <div className="more-danger-group">
            <ProfileRow
              icon="trash"
              label="Delete Account"
              tone="danger"
              onClick={() => setDeleteOpen(true)}
            />
            <ProfileRow icon="logout" label="Log Out" tone="danger" onClick={onLogout} />
          </div>
        </div>
      </section>

      <ActionModal
        open={deleteOpen}
        title="Delete your account?"
        description="This action cannot be undone. Your ChemShaa profile, points, history and account access would be permanently removed."
        confirmLabel="Delete account"
        destructive
        onCancel={() => setDeleteOpen(false)}
        onConfirm={() => setDeleteOpen(false)}
      />
    </AppShell>
  )
}
