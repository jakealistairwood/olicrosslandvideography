"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

const FooterWrapper = ({ contactDetails, footerOptions }) => {
    const { cta } = footerOptions;
    const { email_address, mobile_number, socials } = contactDetails;

    const linkExists = cta?.button?.link && cta.button.link?.length > 0;
    const emailExists = email_address && email_address.length > 0;
    const mobileExists = mobile_number && mobile_number.length > 0;

    console.log(mobileExists);

    return (
        <>
            <div className="grid grid-cols-12 pt-20 pb-16">
                <div className="col-span-7 flex flex-col">
                    <div className="flex flex-col">
                        {cta?.heading && cta?.heading?.length > 0 && <h3 className="text-[2.5rem] font-heading uppercase tracking-[0.05em]">{cta?.heading}</h3>}
                        {linkExists && <Link className="flex items-center gap-2 mt-4" href={cta?.button?.link}>
                            <div className="flex items-center justify-center text-center rounded border border-[#4D4D4D] text-white uppercase font-mono text-sm py-4 px-6 tracking-[0.10em]">{cta?.button?.label}</div>
                            <div className="flex items-center justify-center rounded border border-[#4D4D4D] min-h-[54px] py-4 px-6">
                                <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.0386 5.8891L8.08892 10.8388C7.98572 10.942 7.84576 11 7.69982 11C7.55387 11 7.41391 10.942 7.31071 10.8388C7.20752 10.7356 7.14954 10.5957 7.14954 10.4497C7.14954 10.3038 7.20752 10.1638 7.31071 10.0606L11.3221 6.04997H0.550214C0.404353 6.04997 0.264466 5.99203 0.161327 5.88889C0.0581873 5.78575 0.000244141 5.64586 0.000244141 5.5C0.000244141 5.35414 0.0581873 5.21425 0.161327 5.11111C0.264466 5.00797 0.404353 4.95003 0.550214 4.95003H11.3221L7.31071 0.939378C7.20752 0.836182 7.14954 0.696217 7.14954 0.550275C7.14954 0.404333 7.20752 0.264368 7.31071 0.161172C7.41391 0.0579752 7.55387 0 7.69982 0C7.84576 0 7.98572 0.0579752 8.08892 0.161172L13.0386 5.1109C13.0898 5.16197 13.1303 5.22263 13.158 5.28939C13.1857 5.35616 13.1999 5.42772 13.1999 5.5C13.1999 5.57227 13.1857 5.64384 13.158 5.71061C13.1303 5.77737 13.0898 5.83803 13.0386 5.8891Z" fill="white"/>
                                </svg>
                            </div>
                        </Link>}
                    </div>
                    {socials && socials.length > 0 && (
                        <div className="mt-auto pt-[110px] flex items-center gap-3">
                            {socials?.map((social, i) => (
                                <SocialLink key={`social-profile-link-${i}`} {...social} />
                            ))}
                        </div>
                    )}
                </div>
                <div className="col-span-5 flex gap-x-[140px]">
                    <SiteLinksCol />
                    {(emailExists || mobileExists) && <ContactLinksCol mobile={mobile_number} email={email_address} />}
                </div>
            </div>
            <div className="flex items-center justify-between">

            </div>
        </>
    )
}

export default FooterWrapper;

const SocialLink = ({ icon, name, url }) => {
    return (
        <Link className="w-6 h-6 flex items-center justify-center relative" href={url || ""}>
            {icon?.asset && <Image src={urlForImage(icon?.asset)} fill alt={name ? `${name} logo` : ""} className="h-full w-full object-contain" />}
        </Link>
    )
}

const SiteLinksCol = () => {
    return (
        <nav>
            <h5 className="font-heading text-sm uppercase font-bold tracking-[0.24em]">Site</h5>
            <menu className="mt-10 font-mono flex flex-col gap-y-6">
                <li>
                    <Link href="/" className="uppercase tracking-[0.04em] text-white-80">Home</Link>
                </li>
                <li>
                    <Link href="/about" className="uppercase tracking-[0.04em] text-white-80">About</Link>
                </li>
                <li>
                    <Link href="/portfolio" className="uppercase tracking-[0.04em] text-white-80">Portfolio</Link>
                </li>
            </menu>
        </nav>
    )
}

const ContactLinksCol = ({ mobile, email }) => {
    return (
        <nav>
            <h5 className="font-heading text-sm uppercase font-bold tracking-[0.24em]">Contact</h5>
            <menu className="mt-10 font-mono flex flex-col gap-y-6">
                <li>
                    <Link href={`mailto:${email}` || ""} className="flex items-center gap-x-4 uppercase tracking-[0.04em] text-white-80">
                        <div className="">
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.1295 2.4375H1.68304C1.45216 2.4375 1.23073 2.52738 1.06747 2.68737C0.904217 2.84737 0.8125 3.06436 0.8125 3.29062V10.1156C0.8125 10.3419 0.904217 10.5589 1.06747 10.7189C1.23073 10.8789 1.45216 10.9688 1.68304 10.9688H12.1295C12.3603 10.9688 12.5818 10.8789 12.745 10.7189C12.9083 10.5589 13 10.3419 13 10.1156V3.29062C13 3.06436 12.9083 2.84737 12.745 2.68737C12.5818 2.52738 12.3603 2.4375 12.1295 2.4375ZM11.1719 3.29062L6.90625 6.18272L2.64062 3.29062H11.1719ZM1.68304 10.1156V3.6788L6.65815 7.05291C6.73101 7.10244 6.81757 7.12899 6.90625 7.12899C6.99493 7.12899 7.08149 7.10244 7.15435 7.05291L12.1295 3.6788V10.1156H1.68304Z" fill="#FD6746"/>
                            </svg>
                        </div>
                        {email}
                    </Link>
                </li>
                <li>
                    <Link href={`tel:${mobile}` || ""} className="flex items-center gap-x-4 uppercase tracking-[0.04em] text-white-80">
                        <div className="">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.1609 8.66567L9.58454 7.51122L9.57743 7.50794C9.44368 7.45073 9.29778 7.42777 9.15292 7.44114C9.00807 7.45451 8.86884 7.50378 8.74782 7.5845C8.73357 7.59391 8.71987 7.60414 8.7068 7.61512L7.37571 8.74989C6.53243 8.34028 5.6618 7.47622 5.25219 6.64387L6.3886 5.29255C6.39954 5.27887 6.40993 5.2652 6.41977 5.25044C6.49875 5.12974 6.54668 4.99139 6.55927 4.8477C6.57187 4.70401 6.54874 4.55944 6.49196 4.42684V4.42028L5.33422 1.83958C5.25916 1.66636 5.13009 1.52207 4.96628 1.42824C4.80247 1.33441 4.61271 1.29607 4.42532 1.31895C3.68429 1.41646 3.00409 1.78039 2.51177 2.34275C2.01944 2.90512 1.74867 3.62747 1.75 4.37489C1.75 8.71708 5.28282 12.2499 9.625 12.2499C10.3724 12.2512 11.0948 11.9805 11.6571 11.4881C12.2195 10.9958 12.5834 10.3156 12.6809 9.57458C12.7039 9.38725 12.6656 9.19754 12.5719 9.03373C12.4782 8.86993 12.334 8.74082 12.1609 8.66567ZM9.625 11.3749C7.76911 11.3729 5.98981 10.6347 4.6775 9.3224C3.36518 8.01008 2.62703 6.23078 2.625 4.37489C2.62295 3.84086 2.81535 3.32434 3.16627 2.92179C3.51719 2.51924 4.00264 2.25819 4.53196 2.18739C4.53174 2.18957 4.53174 2.19177 4.53196 2.19395L5.6804 4.76426L4.55 6.11723C4.53853 6.13043 4.52811 6.14451 4.51883 6.15934C4.43654 6.28563 4.38826 6.43103 4.37868 6.58145C4.3691 6.73188 4.39854 6.88223 4.46415 7.01794C4.95961 8.0313 5.98063 9.04465 7.00493 9.53958C7.14163 9.60457 7.29285 9.63299 7.44382 9.62207C7.59479 9.61114 7.74034 9.56124 7.86625 9.47723C7.8803 9.46777 7.89381 9.45755 7.90672 9.44661L9.23618 8.31239L11.8065 9.46356H11.8125C11.7426 9.99363 11.4819 10.4801 11.0793 10.8318C10.6767 11.1836 10.1597 11.3767 9.625 11.3749Z" fill="#FD6746"/>
                            </svg>
                        </div>
                        {mobile}
                    </Link>
                </li>
            </menu>
        </nav>
    )
}