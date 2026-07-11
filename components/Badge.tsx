interface BadgeProps {
  children: string;
}

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <span className="category">
      {children}
    </span>
  );
}