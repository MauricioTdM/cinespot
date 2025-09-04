export default function DetailCard({ title, value }) {
    return (
        <div className="rounded-xl p-4 bg-tertiary">
            <div className="text-sm text-primary">{title}</div>
            <div className="mt-1 font-medium break-words">{value || "—"}</div>
        </div>
    );
}