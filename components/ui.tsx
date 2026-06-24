import type { AnchorHTMLAttributes, ButtonHTMLAttributes, InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'dark';

function joinClasses(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={joinClasses('ds-container', className)}>{children}</div>;
}

export function Section({
  children,
  className,
  id
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={joinClasses('ds-section', className)}>
      {children}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left'
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div className={joinClasses('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      <p className="ds-eyebrow">{eyebrow}</p>
      <h2 className="ds-heading-lg mt-3">{title}</h2>
      {description ? <p className="ds-lead mt-5">{description}</p> : null}
    </div>
  );
}

export function ButtonLink({
  children,
  className,
  variant = 'primary',
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
}) {
  return (
    <a
      className={joinClasses(
        'ds-button',
        variant === 'primary' && 'ds-button-primary',
        variant === 'secondary' && 'ds-button-secondary',
        variant === 'ghost' && 'border border-white/25 bg-white/10 text-white backdrop-blur-xl hover:bg-white/20',
        variant === 'dark' && 'bg-ink text-white hover:bg-espresso',
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}

export function Button({
  children,
  className,
  variant = 'primary',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
}) {
  return (
    <button
      className={joinClasses(
        'ds-button',
        variant === 'primary' && 'ds-button-primary',
        variant === 'secondary' && 'ds-button-secondary',
        variant === 'ghost' && 'border border-white/25 bg-white/10 text-white backdrop-blur-xl hover:bg-white/20',
        variant === 'dark' && 'bg-ink text-white hover:bg-espresso',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={joinClasses('ds-card ds-card-hover', className)}>{children}</div>;
}

export function Field({
  label,
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  label: string;
}) {
  return (
    <label className="block space-y-2">
      <span className="ds-label">{label}</span>
      <input className={joinClasses('ds-input', className)} {...props} />
    </label>
  );
}

export function TextArea({
  label,
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
}) {
  return (
    <label className="block space-y-2">
      <span className="ds-label">{label}</span>
      <textarea className={joinClasses('ds-input min-h-32 resize-none py-3', className)} {...props} />
    </label>
  );
}
