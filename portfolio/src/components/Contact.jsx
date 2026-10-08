import { profile } from "../data/profile";
import Reveal from "./Reveal";
import {
  FiMail,
  FiPhone,
  FiLinkedin,
  FiInstagram,
  FiDownload,
  FiMessageSquare,
} from "react-icons/fi";

export default function Contact() {
  const { contact, name } = profile;

  return (
    <section id="contact" className="marginalia-block" aria-label="Kontak">
      <aside className="marginalia-aside">
        <p className="marginalia-label">05 / KONTAK</p>
        <p className="marginalia-date">Saluran Komunikasi</p>
        <p className="marginalia-note">
          Jalur kontak sosial media dan <i>Curriculum Vitae</i> (CV) Saya.
        </p>
      </aside>

      <div className="marginalia-prose" style={{ maxWidth: "none" }}>
        <Reveal>
          <p className="font-mono text-[0.6875rem] tracking-[0.14em] uppercase text-accent mb-3 font-medium">
            Hubungi Saya
          </p>

          <h2 className="marginalia-headline">
            Kontak Langsung &{" "}
            <em className="accent-clause">Jaringan Profesional.</em>
          </h2>

          <p className="marginalia-body" style={{ maxWidth: "65ch" }}>
            Saya selalu terbuka untuk diskusi mengenai peluang kolaborasi atau sekadar bertukar pikiran.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-8">
          <Reveal delay={0.1}>
            <div className="border border-hairline rounded-sm p-6 md:p-8 space-y-5">
              <h3 className="font-serif text-lg font-semibold text-ink mb-4 flex items-center gap-3">
                <span className="font-mono text-xs tracking-widest text-accent font-normal">
                  § 5.1
                </span>
                <span>Saluran Langsung</span>
              </h3>

              {contact.email && (
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-4 p-3 border border-transparent rounded-sm hover:border-hairline hover:bg-white/40 transition-all duration-150 group"
                  aria-label={`Kirim email ke ${contact.email}`}
                >
                  <div className="w-10 h-10 rounded-sm border border-hairline flex items-center justify-center text-accent group-hover:border-ink transition-colors">
                    <FiMail size={18} />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] tracking-wider uppercase text-muted">
                      Email
                    </span>
                    <span className="text-sm font-medium text-ink group-hover:text-accent transition-colors">
                      {contact.email}
                    </span>
                  </div>
                </a>
              )}

              {contact.phone && (
                <a
                  href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center gap-4 p-3 border border-transparent rounded-sm hover:border-hairline hover:bg-white/40 transition-all duration-150 group"
                  aria-label={`Telepon ke ${contact.phone}`}
                >
                  <div className="w-10 h-10 rounded-sm border border-hairline flex items-center justify-center text-accent group-hover:border-ink transition-colors">
                    <FiPhone size={18} />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] tracking-wider uppercase text-muted">
                      Telepon
                    </span>
                    <span className="text-sm font-medium text-ink group-hover:text-accent transition-colors">
                      {contact.phone}
                    </span>
                  </div>
                </a>
              )}

              {contact.whatsapp && (
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 border border-transparent rounded-sm hover:border-hairline hover:bg-white/40 transition-all duration-150 group"
                  aria-label="Hubungi via WhatsApp"
                >
                  <div className="w-10 h-10 rounded-sm border border-hairline flex items-center justify-center text-accent group-hover:border-ink transition-colors">
                    <FiMessageSquare size={18} />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] tracking-wider uppercase text-muted">
                      WhatsApp
                    </span>
                    <span className="text-sm font-medium text-ink group-hover:text-accent transition-colors">
                      Kirim Pesan WhatsApp
                    </span>
                  </div>
                </a>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="border border-hairline rounded-sm p-6 md:p-8 space-y-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="font-serif text-lg font-semibold text-ink mb-4 flex items-center gap-3">
                  <span className="font-mono text-xs tracking-widest text-accent font-normal">
                    § 5.2
                  </span>
                  <span>Jaringan Profesional</span>
                </h3>

                <p className="text-sm text-muted mb-6 font-serif">
                  Temukan profil profesional saya dan aktivitas terbaru di media
                  sosial.
                </p>

                <div className="flex flex-wrap gap-3">
                  {contact.linkedin && (
                    <a
                      href={contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center gap-2"
                      aria-label="Profil LinkedIn"
                    >
                      <FiLinkedin size={16} />
                      LinkedIn
                    </a>
                  )}

                  {contact.instagram && (
                    <a
                      href={contact.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center gap-2"
                      aria-label="Profil Instagram"
                    >
                      <FiInstagram size={16} />
                      Instagram
                    </a>
                  )}
                </div>
              </div>

              {contact.cvFile && (
                <div className="pt-6 border-t border-hairline">
                  <span className="block font-mono text-[10px] tracking-wider uppercase text-accent mb-3">
                    Kurikulum Vitae
                  </span>
                  <a
                    href={contact.cvFile}
                    download={`CV_${name.replace(/\s+/g, "_")}.pdf`}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                    aria-label="Unduh CV PDF"
                  >
                    <FiDownload size={16} />
                    Unduh CV Terbaru (PDF)
                  </a>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
