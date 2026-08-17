interface ActionModalProps {
  open: boolean
  title: string
  description: string
  confirmLabel: string
  cancelLabel?: string
  destructive?: boolean
  onConfirm: () => void
  onCancel: () => void
}

export default function ActionModal({
  open, title, description, confirmLabel, cancelLabel = 'Cancel', destructive = false, onConfirm, onCancel,
}: ActionModalProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-5" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="w-full max-w-[390px] rounded-[22px] bg-white p-6 shadow-2xl animate-modalIn">
        <h2 id="modal-title" className="text-[21px] font-bold">{title}</h2>
        <p className="mt-3 text-[13.5px] font-normal leading-[1.45] text-black/65">{description}</p>
        <div className="mt-7 flex gap-3">
          <button type="button" onClick={onCancel} className="flex-1 rounded-xl border border-black/15 px-4 py-3 text-sm font-bold transition hover:bg-black/5">{cancelLabel}</button>
          <button type="button" onClick={onConfirm} className={`flex-1 rounded-xl px-4 py-3 text-sm font-bold text-white transition ${destructive ? 'bg-[#ff5c4d] hover:bg-[#e54e42]' : 'bg-black hover:bg-black/80'}`}>{confirmLabel}</button>
        </div>
      </div>
    </div>
  )
}
