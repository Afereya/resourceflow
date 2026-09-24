type DashboardMetricProps = {
  label: string;
  value: string | number;
};

export function DashboardMetric({ label, value }: DashboardMetricProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold">{label}</h2>
      <p className="text-sm text-slate-600">
        <strong>Value:</strong> {value}
      </p>
    </article>
  );
}
