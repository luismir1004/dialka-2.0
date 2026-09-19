import Link from "next/link";
import {
  Scale,
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
} from "lucide-react";
import { CONTACT, NAV_LINKS, COMPANY, BRANDS } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#991b1b] flex items-center justify-center shadow-xs">
                <Scale size={20} className="text-white" />
              </div>
              <div>
                <span className="font-bold text-white text-sm block leading-tight">
                  Balanzas Dialka
                </span>
                <span className="text-xs text-red-300/80 block leading-tight">
                  Desde {COMPANY.foundedYear}
                </span>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-5">
              {COMPANY.description}
            </p>
            {/* Social links */}
            <div className="flex gap-3 flex-wrap">
              {CONTACT.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  title={s.name}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-red-800/80 flex items-center justify-center transition-colors text-slate-300 hover:text-white"
                >
                  <ExternalLink size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">
              Secciones
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-red-300 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Caracas */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
              <MapPin size={14} className="text-red-400" />
              Sede Caracas
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <p className="leading-relaxed">{CONTACT.headquarters[0].address}</p>
              <p>RIF: {CONTACT.headquarters[0].rif}</p>
              <a
                href={`tel:${CONTACT.headquarters[0].phones.main}`}
                className="flex items-center gap-1.5 hover:text-red-300 transition-colors"
              >
                <Phone size={12} />
                {CONTACT.headquarters[0].phones.main}
              </a>
              <a
                href={`mailto:${CONTACT.headquarters[0].email}`}
                className="flex items-center gap-1.5 hover:text-red-300 transition-colors break-all"
              >
                <Mail size={12} />
                {CONTACT.headquarters[0].email}
              </a>
              <p className="flex items-center gap-1.5">
                <Clock size={12} className="shrink-0" />
                {CONTACT.headquarters[0].schedule}
              </p>
            </div>
          </div>

          {/* Maracay */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
              <MapPin size={14} className="text-red-400" />
              Sede Maracay
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <p className="leading-relaxed">{CONTACT.headquarters[1].address}</p>
              <p>RIF: {CONTACT.headquarters[1].rif}</p>
              <a
                href={`tel:${CONTACT.headquarters[1].phones.ventas[0]}`}
                className="flex items-center gap-1.5 hover:text-red-300 transition-colors"
              >
                <Phone size={12} />
                {CONTACT.headquarters[1].phones.ventas[0]}
              </a>
              <a
                href={`mailto:${CONTACT.headquarters[1].email}`}
                className="flex items-center gap-1.5 hover:text-red-300 transition-colors break-all"
              >
                <Mail size={12} />
                {CONTACT.headquarters[1].email}
              </a>
              <p className="flex items-center gap-1.5">
                <Clock size={12} className="shrink-0" />
                {CONTACT.headquarters[1].schedule}
              </p>
            </div>
          </div>
        </div>

        {/* Brands strip */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-xs text-slate-400 mb-4 uppercase tracking-widest">
            Marcas y partners
          </p>
          <div className="flex flex-wrap gap-3">
            {BRANDS.map((brand) => (
              <span
                key={brand.name}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs hover:border-red-500/40 transition-colors"
              >
                {brand.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-400">
          <span>
            © {year} Balanzas y Servicios Dialka, S.A. Todos los derechos
            reservados.
          </span>
          <span>
            RIF J-30814715-0 · J-50269333-5
          </span>
        </div>
      </div>
    </footer>
  );
}
