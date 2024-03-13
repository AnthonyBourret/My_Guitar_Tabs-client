import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Import Components
import Footer from "../Footer/Footer";

// Import SVG
import { Logo } from "../../svg";


const LegalMentions = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center pt-12">

            {/* Logo clickable to redirect to the home page */}
            <Link to="/">
                <Logo widthValue={"100%"} color={"#201c1b"} />
            </Link>

            <div className="divider w-[70%] self-center" />

            {/* Legal Mentions Text*/}
            <div className="max-w-2xl text-sm sm:text-base mx-auto p-8 text-justify">
                <h1 className="text-3xl font-bold mb-4">Legal Mentions</h1>
                <p className="mb-4"><strong>MyGuitarTabs</strong> ("we," "us," or "our") is the operator of this website. Throughout the site, the terms “we,” “us,” and “our” refer to <strong>MyGuitarTabs</strong>. <strong>MyGuitarTabs</strong> offers this website, including all information, tools, and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here.</p>
                <h2 className="text-xl font-bold mb-2">Intellectual Property Rights</h2>
                <p className="mb-4">All content included on this site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of <strong>MyGuitarTabs</strong> or its content suppliers and protected by international copyright laws. The compilation of all content on this site is the exclusive property of <strong>MyGuitarTabs</strong>, with copyright authorship for this collection by <strong>MyGuitarTabs</strong>, and protected by international copyright laws.</p>
                <h2 className="text-xl font-bold mb-2">Limitation of Liability</h2>
                <p className="mb-4"><strong>MyGuitarTabs</strong> will not be liable for any indirect, special, or consequential damages arising from the use of, or the inability to use, the materials on this site or the performance of the products, even if [Your Company/Website Name] has been advised of the possibility of such damages. Applicable law may not allow the limitation of exclusion of liability or incidental or consequential damages, so the above limitation or exclusion may not apply to you.</p>
                <h2 className="text-xl font-bold mb-2">Governing Law</h2>
                <p className="mb-4">These terms and conditions are governed by and construed in accordance with the laws of E.U and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
                <h2 className="text-xl font-bold mb-2">Changes to This Legal Mentions</h2>
                <p className="mb-4">We reserve the right to update or change our Legal Mentions at any time. Any changes will be effective immediately upon posting the updated Legal Mentions on this website.</p>
            </div>

            {/* Button to go to the previous page */}
            <button className="btn btn-primary border border-base-200" onClick={() => navigate(-1)}>
                Go Back
            </button>

            <Footer />
        </div>
    );
}

export default LegalMentions;
