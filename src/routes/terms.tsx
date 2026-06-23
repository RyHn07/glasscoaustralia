import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ScrollText,
  Search,
  Printer,
  ChevronUp,
  ShieldCheck,
  FileText,
  ArrowRight,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions of Trade — GlassCo Australia" },
      {
        name: "description",
        content:
          "Official Terms & Conditions of Trade for GlassCo Australia Pty Ltd — covering pricing, delivery, warranties, returns and privacy.",
      },
      { property: "og:title", content: "Terms & Conditions of Trade — GlassCo Australia" },
      {
        property: "og:description",
        content:
          "Read the full Terms & Conditions of Trade governing our supply of glass products and services.",
      },
    ],
  }),
  component: TermsPage,
});

type Clause = { id: string; text: React.ReactNode };
type Section = { num: number; id: string; title: string; clauses: Clause[] };

const SECTIONS: Section[] = [
  {
    num: 1,
    id: "definitions",
    title: "Definitions",
    clauses: [
      { id: "1.1", text: <><b>“Confidential Information”</b> means information of a confidential nature whether oral, written or in electronic form including, but not limited to, this Contract, either party’s intellectual property, operational information, know-how, trade secrets, financial and commercial affairs, Contracts, client information (including <b>Personal Information</b> such as name, address, D.O.B, occupation, driver’s licence details, electronic contact details, medical insurance details or next of kin, previous credit applications, credit history) and pricing details.</> },
      { id: "1.2", text: <><b>“Contract”</b> means the terms and conditions contained herein, together with any quotation, order, invoice or other document or amendments expressed to be supplemental to this Contract.</> },
      { id: "1.3", text: <><b>“Cookies”</b> means small files stored on a user’s computer designed to hold data specific to a particular client and website. If the Customer does not wish to allow Cookies, the Customer may enable/disable them via the option provided on the website prior to making enquiries.</> },
      { id: "1.4", text: <><b>“Customer”</b> means the person/s, entities or any person acting on behalf of and with the authority of the Customer requesting the Seller to provide the Services as specified in any proposal, quotation, order, invoice or other documentation, and: (a) if more than one Customer, jointly and severally; (b) if a partnership, binds each partner jointly and severally; (c) if a Trust, is bound as trustee; and (d) includes executors, administrators, successors and permitted assigns.</> },
      { id: "1.5", text: <><b>“Goods”</b> means all Goods or Services supplied by the Seller to the Customer at the Customer’s request from time to time (the terms ‘Goods’ or ‘Services’ are interchangeable where context permits).</> },
      { id: "1.6", text: <><b>“GST”</b> means Goods and Services Tax as defined within the “A New Tax System (Goods and Services Tax) Act 1999” (Cth).</> },
      { id: "1.7", text: <><b>“Intended Use”</b> means any associated building products and the use thereof, for which the product is intended to be, or is reasonably likely to be, associated with the Services.</> },
      { id: "1.8", text: <><b>“Non-Conforming Building Product”</b> means any associated building products regarded as Non-Conforming for an Intended Use if, when associated with a building: (a) the product is not, or will not be, safe; (b) does not, or will not, comply with the relevant regulatory provisions; or (c) does not perform, or is not capable of performing, for the use to the standard represented.</> },
      { id: "1.9", text: <><b>“Price”</b> means the Price payable (plus any GST where applicable) for the Goods as agreed between the Seller and the Customer in accordance with clause 5.</> },
      { id: "1.10", text: <><b>“Seller”</b> means GlassCo Australia Pty Ltd, its successors and assigns or any person acting on behalf of and with the authority of GlassCo Australia Pty Ltd.</> },
    ],
  },
  {
    num: 2,
    id: "acceptance",
    title: "Acceptance",
    clauses: [
      { id: "2.1", text: "The parties acknowledge and agree that (a) they have read and understood these terms and conditions; and (b) the parties are exclusively bound, jointly and severally, by these terms once the Customer places an order or accepts delivery of the Goods." },
      { id: "2.2", text: "In the event of any inconsistency between these terms and any prior document or schedule, the terms of this Contract shall prevail." },
      { id: "2.3", text: "The Customer acknowledges and agrees that it is their responsibility to obtain a thermal assessment for the Solar Control glass." },
      { id: "2.4", text: "Any amendment to these terms may only be made in writing by the consent of both parties." },
      { id: "2.5", text: "Electronic signatures shall be accepted provided the parties have complied with Section 9 of the Electronic Transactions (Victoria) Act 2000 or any other applicable provisions of that Act or its Regulations." },
    ],
  },
  {
    num: 3,
    id: "errors",
    title: "Errors and Omissions",
    clauses: [
      { id: "3.1", text: "The Customer acknowledges that the Seller accepts no liability for any alleged or actual error(s) and/or omission(s) (a) resulting from an inadvertent mistake by the Seller in the formation/administration of this Contract; and/or (b) contained in/omitted from any literature supplied by the Seller in respect of the Services." },
      { id: "3.2", text: "Where the Customer is required to place an order in writing, the Customer is responsible for supplying correct order information such as measurements and quantity (“Customer Error”). The Customer must pay for all Goods it orders notwithstanding any Customer Error, even if the Customer has not taken delivery. The Seller may at its discretion waive this right." },
    ],
  },
  {
    num: 4,
    id: "change-of-control",
    title: "Change in Control",
    clauses: [
      { id: "4.1", text: "The Customer shall give the Seller not less than fourteen (14) days prior written notice of any proposed change of ownership of the Customer and/or any change in the Customer’s details (including name, address, contact numbers, change of trustees, or business practice). The Customer shall be liable for any loss incurred by the Seller as a result of failure to comply." },
    ],
  },
  {
    num: 5,
    id: "price-payment",
    title: "Price and Payment",
    clauses: [
      { id: "5.1", text: "At the Seller’s sole discretion, the Price shall be: (a) as indicated on any invoice; or (b) the Seller’s quoted Price (subject to clause 5.2) valid for the period stated or otherwise thirty (30) days." },
      { id: "5.2", text: "The Seller reserves the right to change the Price if (a) a variation to the Goods is requested; (b) a variation to the Services originally scheduled is requested; or (c) increases occur in freight, labour or material costs outside the Seller’s control." },
      { id: "5.3", text: "Variations will be charged on the basis of the Seller’s quotation, detailed in writing and shown as variations on the Seller’s invoice. The Customer must respond to any variation within ten (10) working days. Failure to do so entitles the Seller to add the variation to the Price. Payment for all variations must be made in full at completion." },
      { id: "5.4", text: "At the Seller’s sole discretion, a reasonable deposit may be required upon placement of an order." },
      { id: "5.5", text: "Time for payment being of the essence, the Price will be payable: (a) on the date specified on the invoice; or (b) thirty (30) days following the date of any invoice." },
      { id: "5.6", text: "Payment may be made by cash, cheque, bank cheque, electronic/online banking, credit card (American Express and Diners not accepted; a surcharge may apply), or by any other method agreed." },
      { id: "5.7", text: "The Seller may allocate any payment received from the Customer towards any invoice the Seller determines. In the absence of allocation, payment will be deemed to preserve the maximum value of the Seller’s Purchase Money Security Interest in the Goods." },
      { id: "5.8", text: "The Customer shall not set off against, or deduct from, the Price any sums claimed to be owed, nor withhold payment because part of an invoice is in dispute. Any disputed portion must be raised in writing within three (3) business days; the invoice remains due and payable in full until the Seller investigates." },
      { id: "5.9", text: "Unless otherwise stated the Price does not include GST. The Customer must pay GST and any other applicable taxes at the same time and on the same basis as the Price." },
    ],
  },
  {
    num: 6,
    id: "delivery",
    title: "Delivery of Goods",
    clauses: [
      { id: "6.1", text: "Delivery occurs when (a) the Customer (or its nominated carrier) takes possession at the Seller’s address; or (b) the Seller (or its nominated carrier) delivers to the Customer’s nominated address, even if the Customer is not present." },
      { id: "6.2", text: "The cost of Delivery will be payable by the Customer per the Seller’s quotation or as otherwise notified prior to placement of the order." },
      { id: "6.3", text: "The Seller may deliver the Goods in separate instalments, each invoiced and paid in accordance with these terms." },
      { id: "6.4", text: "The Customer must take Delivery whenever Goods are tendered." },
      { id: "6.5", text: "Any time specified for Delivery is an estimate only; the Seller will not be liable for late Delivery. If the Seller is unable to supply due to the Customer’s action/inaction, the Seller may charge a reasonable fee for redelivery and/or storage." },
    ],
  },
  {
    num: 7,
    id: "returnable-equipment",
    title: "Returnable Equipment",
    clauses: [
      { id: "7.1", text: "Returnable pallets, packing cases or containers will only be credited when returned in good condition, carriage paid. The Customer is responsible for their care and safety while on its premises; replacement/repair costs for lost or damaged equipment are for the Customer’s account." },
    ],
  },
  {
    num: 8,
    id: "risk",
    title: "Risk",
    clauses: [
      { id: "8.1", text: "Risk of damage or loss passes to the Customer on Delivery; the Customer must insure the Goods on or before Delivery." },
      { id: "8.2", text: "If Goods are damaged or destroyed after Delivery but before ownership passes, the Seller is entitled to receive all insurance proceeds. These terms are sufficient evidence of the Seller’s rights." },
      { id: "8.3", text: "If the Customer requests Goods be left outside the Seller’s premises for collection or delivered to an unattended location, such Goods are left at the Customer’s sole risk." },
      { id: "8.4", text: "Any advice, recommendation or information provided by the Seller is given in good faith based on the Seller’s knowledge and experience and shall be accepted without liability. Where advice is not acted upon, the Seller requires written authorisation to commence; the Seller shall not be liable for any damages or losses after commencement." },
      { id: "8.5", text: "The Seller is entitled to rely on the accuracy of plans, specifications and other information provided by the Customer; the Seller accepts no responsibility for losses resulting from inaccurate information." },
      { id: "8.6", text: "Any model or sample shown illustrates only the general type and quality of the Goods, not a representation that the Goods will conform to the sample." },
      { id: "8.7", text: "The Seller (a) shall not be responsible for thermal cracks or failure; (b) shall not be liable for additional expenses (including deglazing/reglazing) when replacing/repairing the Goods; and (c) will only be liable for damages up to the value of the Goods supplied unless otherwise stated." },
    ],
  },
  {
    num: 9,
    id: "access",
    title: "Access",
    clauses: [
      { id: "9.1", text: "The Customer shall ensure the Seller has clear and free access to the work site at all times. The Seller shall not be liable for loss or damage to the work site unless due to its negligence." },
      { id: "9.2", text: "It is the Customer’s responsibility to provide the Seller with adequate access to available amenities while at the work site." },
      { id: "9.3", text: "Where the Seller stores Goods/tools at the work site, the Customer shall supply a safe storage area and take all reasonable efforts to protect items. Repair/replacement costs for destroyed, stolen or damaged items are the Customer’s responsibility." },
      { id: "9.4", text: "Work site Inductions: (a) inductions undertaken during working hours are payable by the Customer at hourly rates; pre-commencement inductions are charged at standard (or overtime) rates; (b) where the Seller controls the work site, the Customer and third-party contractors must complete the Seller’s Health & Safety induction. Inspections during the Services are by appointment only and must be accompanied by the Seller." },
    ],
  },
  {
    num: 10,
    id: "title",
    title: "Title",
    clauses: [
      { id: "10.1", text: "Ownership of the Goods does not pass until (a) the Customer has paid all amounts owing; and (b) the Customer has met all other obligations to the Seller." },
      { id: "10.2", text: "Receipt of any form of payment other than cash is not deemed payment until honoured, cleared or recognised." },
      { id: "10.3", text: "Until ownership passes: (a) the Customer is a bailee and must return the Goods on request; (b) the Customer holds insurance benefits on trust for the Seller; (c) the Customer must not sell, dispose or part with possession other than in the ordinary course of business at market value, holding proceeds on trust; (d) the Customer must not convert or intermix Goods; (e) the Customer irrevocably authorises the Seller to enter premises to recover Goods; (f) the Seller may recover Goods in transit; (g) the Customer shall not charge or encumber the Goods; and (h) the Seller may commence proceedings to recover the Price even where ownership has not passed." },
    ],
  },
  {
    num: 11,
    id: "ppsa",
    title: "Personal Property Securities Act 2009 (“PPSA”)",
    clauses: [
      { id: "11.1", text: "In this clause, financing statement, financing change statement, security agreement and security interest have the meanings given in the PPSA." },
      { id: "11.2", text: "Upon assenting to these terms in writing, the Customer acknowledges these terms constitute a security agreement for the PPSA and create a security interest in all Goods previously and to be supplied, and the proceeds." },
      { id: "11.3", text: "The Customer undertakes to: (a) sign documents/provide information to register a financing or change statement on the PPS Register or correct defects; (b) indemnify the Seller for all expenses incurred in registration or release; (c) not register a financing change statement without consent; (d) not register or permit registration in favour of a third party without consent; and (e) immediately advise material changes in business practices affecting proceeds." },
      { id: "11.4", text: "Sections 96, 115 and 125 of the PPSA do not apply to this security agreement." },
      { id: "11.5", text: "The Customer waives rights to receive notices under sections 95, 118, 121(4), 130, 132(3)(d) and 132(4) of the PPSA." },
      { id: "11.6", text: "The Customer waives rights as a grantor/debtor under sections 142 and 143 of the PPSA." },
      { id: "11.7", text: "Unless otherwise agreed in writing, the Customer waives the right to receive a verification statement under section 157 of the PPSA." },
      { id: "11.8", text: "The Customer must unconditionally ratify any actions taken by the Seller under clauses 11.3 to 11.5." },
      { id: "11.9", text: "Subject to any express provisions to the contrary, nothing is intended to contract out of the PPSA." },
    ],
  },
  {
    num: 12,
    id: "security-charge",
    title: "Security and Charge",
    clauses: [
      { id: "12.1", text: "In consideration of the Seller supplying Goods/Services, the Customer grants the Seller a security interest by way of a floating charge (registerable under the PPSA) over all present and after-acquired rights, title and interest in all other assets owned or to be owned by the Customer, to secure repayment and/or to appoint a receiver under the Corporations Act 2001 (Cth)." },
      { id: "12.2", text: "The Customer indemnifies the Seller against all costs and disbursements (including legal costs on a solicitor and own client basis) incurred in exercising the Seller’s rights." },
      { id: "12.3", text: "If the Customer defaults and the security in clauses 10.1, 11.2 and 12.1 is deemed insufficient, the Customer grants the Seller a security interest by way of charge enabling lodgement of a caveat over any real property or land owned now or in the future, to secure performance of obligations." },
    ],
  },
  {
    num: 13,
    id: "defects-warranties",
    title: "Defects, Warranties and Returns — Competition and Consumer Act 2010 (CCA)",
    clauses: [
      { id: "13.1", text: "If the Customer collects Goods from the Seller’s premises, the Customer must immediately inspect for defects/damages (including chips, scratches or faults) and notify the Seller." },
      { id: "13.2", text: "Where Goods are delivered to the Customer, the Customer must inspect and notify the Seller in writing within three (3) days of any evident defect/damage, shortage or non-conformity. Other alleged defects must be notified as soon as reasonably possible. The Customer must allow the Seller to inspect." },
      { id: "13.3", text: "Where the Seller inspects an alleged defect at the Customer’s premises/work site, the Seller may charge a fee, which will be reimbursed if defects contributed by the Seller are evident." },
      { id: "13.4", text: "Under applicable law (including the CCA), certain statutory implied guarantees and warranties may be implied into these terms (Non-Excluded Guarantees)." },
      { id: "13.5", text: "Nothing in these terms purports to modify or exclude the Non-Excluded Guarantees." },
      { id: "13.6", text: "Except as expressly set out or for Non-Excluded Guarantees, the Seller makes no warranties or representations. The Seller’s liability is limited to the fullest extent permitted by law." },
      { id: "13.7", text: "If the Customer is a consumer within the meaning of the CCA, the Seller’s liability is limited per section 64A of Schedule 2." },
      { id: "13.8", text: "Subject to this clause 13, returns will only be considered at the Seller’s discretion and must comply with clause 13.10." },
      { id: "13.9", text: "Returns will only be considered for a period of seven (7) days from the date of Delivery." },
      { id: "13.10", text: "Returns will only be considered provided that (a) the Customer has complied with clause 13.1; (b) the Seller has agreed the Goods are defective; (c) the Goods are returned within five (5) days at the Customer’s cost (if not significant); and (d) the Goods are returned in as close to original condition as possible." },
      { id: "13.11", text: "Notwithstanding the above but subject to the CCA, the Seller is not liable for any defect or damage caused by (a) failure to properly maintain or store Goods; (b) using Goods for any purpose other than intended; (c) continued use after a defect was or should have been apparent; (d) failing to follow instructions; and/or (e) fair wear and tear, accident or act of God." },
      { id: "13.12", text: "The Seller may at its discretion accept non-defective Goods for return and may require handling fees of up to twenty percent (20%) of the value plus freight." },
      { id: "13.13", text: "If the Seller is required by law to accept a return, returns will only be accepted on the conditions imposed by that law." },
    ],
  },
  {
    num: 14,
    id: "compliance",
    title: "Compliance with Laws",
    clauses: [
      { id: "14.1", text: "Both parties shall comply with all statutes, regulations and bylaws of government and public authorities applicable to the Goods/Services." },
      { id: "14.2", text: "Where the Customer supplies materials, the Customer accepts responsibility for their suitability and for the Intended Use. If the Seller believes such materials are Non-Conforming, the Seller may halt the Services until conforming products are sourced; associated costs will be invoiced under clause 5.2." },
      { id: "14.3", text: "The Customer agrees all materials supplied by it or its sub-contractors will (a) be supplied in accordance with legislative requirements; and (b) be suitable for inclusion in the Services." },
      { id: "14.4", text: "The Customer shall obtain (at its expense) all licences and approvals required for the Services." },
    ],
  },
  {
    num: 15,
    id: "suitability",
    title: "Suitability for Applications",
    clauses: [
      { id: "15.1", text: "To the extent permitted by law, no condition or warranty is implied as to life, wear or fitness for any particular purpose, even where such purpose has been made known to the Seller. While Goods are supplied to specific manufacturing standards, it is the Customer’s responsibility to ensure compliance with applicable Australian Glazing Standards. The Seller reserves the right to sub-contract production or supply." },
    ],
  },
  {
    num: 16,
    id: "ip",
    title: "Intellectual Property",
    clauses: [
      { id: "16.1", text: "Where the Seller has designed, drawn or developed Goods, copyright in such designs, drawings and documents remains the Seller’s property and may not be used without written approval." },
      { id: "16.2", text: "The Customer warrants designs, specifications or instructions supplied will not cause the Seller to infringe any patent, registered design or trade mark, and indemnifies the Seller against any such action." },
      { id: "16.3", text: "The Customer agrees the Seller may use (at no cost) any documents, designs, drawings or Goods created for the Customer for marketing or competition entries." },
    ],
  },
  {
    num: 17,
    id: "default",
    title: "Default and Consequences of Default",
    clauses: [
      { id: "17.1", text: "Interest on overdue invoices accrues daily from the due date at 2.5% per calendar month (compounding monthly at the Seller’s discretion), after as well as before any judgment." },
      { id: "17.2", text: "If the Customer owes any money, the Customer indemnifies the Seller against all costs and disbursements (including legal costs on a solicitor and own client basis), internal administration fees, contract default fees, recovery costs and bank dishonour fees." },
      { id: "17.3", text: "If a payment is reversed (other than legitimately), the Customer is liable for the reversed amount plus further costs incurred under clause 17 where the reversal is illegal, fraudulent or in contravention of the Customer’s obligations." },
      { id: "17.4", text: "Without prejudice to other remedies, the Seller may cancel unfulfilled orders and all amounts owing become immediately payable if (a) money becomes overdue or the Customer cannot pay when due; (b) the Customer becomes insolvent or enters arrangements with creditors; or (c) a receiver/manager/liquidator is appointed." },
    ],
  },
  {
    num: 18,
    id: "cancellation",
    title: "Cancellation",
    clauses: [
      { id: "18.1", text: "Either party may, on written notice, suspend or terminate supply/purchase of Goods/Services with immediate effect if the other party breaches any obligation. Neither party will be liable for any loss arising from exercising this right." },
      { id: "18.2", text: "If the Seller is unable to deliver due to reasons beyond its reasonable control, the Seller may cancel any Contract or Delivery before delivery by written notice and repay any money paid; the Seller shall not be liable for any loss arising from such cancellation." },
      { id: "18.3", text: "The Customer may cancel Delivery by written notice within forty-eight (48) hours of placing the order, and will not be liable for costs, except where a deposit is payable under clause 5.4." },
      { id: "18.4", text: "Cancellation of orders for Goods made to the Customer’s specifications, or for non-stocklist items, will not be accepted once production has commenced or an order has been placed." },
    ],
  },
  {
    num: 19,
    id: "privacy",
    title: "Privacy Policy",
    clauses: [
      { id: "19.1", text: "All emails, documents, images or other recorded information held by the Seller is Personal Information and is treated as Confidential. The Seller acknowledges its obligations under the Privacy Act 1988 (including Part IIIC — Notifiable Data Breaches) and, where relevant in the EEA, under EU Data Privacy Laws (including the GDPR). The Seller will notify the Customer of any data breach that may result in serious harm." },
      { id: "19.2", text: "Privacy limitations extend to Cookies and similar tracking technologies where the Customer uses the Seller’s website. The Seller may collect IP address, browser/email client details, website usage and email-tracking reports. The Customer may withdraw consent via browser settings." },
      { id: "19.3", text: "Where applicable, the Customer agrees the Seller may obtain a credit report from a credit reporting body (CRB) containing personal credit information in relation to credit provided by the Seller." },
      { id: "19.4", text: "The Customer agrees the Seller may exchange information with credit providers and related body corporates to (a) assess applications; (b) notify defaults; (c) exchange status information; and (d) assess creditworthiness including repayment history in the preceding two (2) years." },
      { id: "19.5", text: "The Customer consents to the Seller being given a consumer credit report to collect personal credit information relating to overdue commercial credit." },
      { id: "19.6", text: "Personal credit information may be used and retained for (a) provision of Goods; (b) verification of credit/payment status; (c) processing payment instructions; and (d) collection of outstanding amounts." },
      { id: "19.7", text: "The Seller may give information about the Customer to a CRB to (a) obtain a consumer credit report; and (b) allow the CRB to create/maintain a credit information file." },
      { id: "19.8", text: "Information given to the CRB may include Personal Information, credit-provider details, type of credit, application details, default advice (overdue more than 60 days), serious credit infringement information, or advice that overdue payment is equal to or more than $150." },
      { id: "19.9", text: "The Customer may request (by email) a copy of Personal Information retained, correction of incorrect information, and that the Seller not disclose Personal Information for direct marketing." },
      { id: "19.10", text: "The Seller will destroy Personal Information upon request (by email) or if no longer required, unless retention is needed to fulfil this Contract or is required by law." },
      { id: "19.11", text: "Privacy complaints may be made by email. The Seller will respond within seven (7) days and aim to resolve within thirty (30) days. Unresolved complaints may be referred to the Information Commissioner at www.oaic.gov.au." },
    ],
  },
  {
    num: 20,
    id: "security-of-payment",
    title: "Building and Construction Industry Security of Payment Act 2002",
    clauses: [
      { id: "20.1", text: "At the Seller’s sole discretion, if there are any disputes or claims for unpaid Goods/Services, the provisions of the Building and Construction Industry Security of Payment Act 2002 may apply." },
      { id: "20.2", text: "Nothing in this Contract is intended to contract out of any applicable provisions of the Act, except to the extent permitted." },
    ],
  },
  {
    num: 21,
    id: "notices",
    title: "Service of Notices",
    clauses: [
      { id: "21.1", text: "Any written notice shall be deemed given and received: (a) by handing it to the other party in person; (b) by leaving it at the other party’s address; (c) by sending it by registered post; (d) by facsimile to the fax number stated, on confirmation; or (e) by email to the other party’s last known email address." },
      { id: "21.2", text: "Any notice that is posted shall be deemed served, unless the contrary is shown, at the time it would have been delivered in the ordinary course of post." },
    ],
  },
  {
    num: 22,
    id: "trusts",
    title: "Trusts",
    clauses: [
      { id: "22.1", text: "If the Customer is acting as trustee or agent for a Trust, whether or not the Seller has notice of the Trust, the Customer covenants that (a) the Contract extends to all rights of indemnity against the Trust, trustees and trust fund; (b) the Customer has full authority to enter into the Contract and will not release any indemnity right; (c) without the Seller’s prior written consent (not unreasonably withheld), the Customer will not cause the removal/replacement of the trustee, alter the Trust, advance/distribute capital, or resettle the trust fund or property." },
    ],
  },
  {
    num: 23,
    id: "general",
    title: "General",
    clauses: [
      { id: "23.1", text: "Any dispute or difference shall be submitted to mediation before resorting to external dispute resolution. The parties share equally the mediator’s fees. If mediation fails, the parties may pursue other avenues." },
      { id: "23.2", text: "Failure to enforce any provision shall not be a waiver. If any provision is invalid, void, illegal or unenforceable, it shall be severed without affecting the remaining provisions." },
      { id: "23.3", text: "These terms are governed by the laws of Victoria and subject to the jurisdiction of its courts. These terms prevail over all terms of the Customer (even if part of the Customer’s purchase order)." },
      { id: "23.4", text: "The Seller may licence and/or assign all or any part of its rights and/or obligations without the Customer’s consent provided the assignment does not cause detriment to the Customer." },
      { id: "23.5", text: "The Customer cannot licence or assign without the written approval of the Seller." },
      { id: "23.6", text: "The Seller may sub-contract any part of the Services but shall not be relieved from any liability. The Customer has no authority to instruct the Seller’s sub-contractors without the Seller’s authority." },
      { id: "23.7", text: "The Customer agrees the Seller may amend these terms for subsequent future Contracts by disclosing such changes in writing. Changes take effect from acceptance or when the Customer makes a further request for Goods." },
    ],
  },
];

function TermsPage() {
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState(SECTIONS[0].id);
  const [showTop, setShowTop] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Active section tracking with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 800);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SECTIONS;
    return SECTIONS.map((s) => {
      const matchTitle = s.title.toLowerCase().includes(q);
      const clauses = s.clauses.filter((c) => {
        const text = typeof c.text === "string" ? c.text : JSON.stringify(c.text);
        return text.toLowerCase().includes(q) || c.id.includes(q);
      });
      if (matchTitle || clauses.length) {
        return { ...s, clauses: matchTitle ? s.clauses : clauses };
      }
      return null;
    }).filter(Boolean) as Section[];
  }, [query]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Poppins, sans-serif" }}>
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1f24] via-[#0d2a31] to-[#0b1f24] text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(800px 400px at 10% 0%, rgba(0,222,247,0.18), transparent 60%), radial-gradient(700px 400px at 90% 100%, rgba(0,154,170,0.25), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[1200px] px-6 py-20 lg:py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#00DEF7]">
            <ShieldCheck className="h-3.5 w-3.5" /> Legal
          </div>
          <h1
            className="mt-5 text-4xl leading-tight md:text-6xl"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
          >
            Terms &amp; Conditions of Trade
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/70 md:text-lg">
            The terms below govern the supply of all goods and services by{" "}
            <b className="text-white">GlassCo Australia Pty Ltd</b>. Please review them carefully —
            they form a binding contract between you and us.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {[
              { k: "23", v: "Sections" },
              { k: "100%", v: "Plain-Language Summary" },
              { k: "VIC", v: "Governing Law" },
              { k: "2025", v: "Last Updated" },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur"
              >
                <div
                  className="text-2xl font-bold text-[#00DEF7]"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {s.k}
                </div>
                <div className="text-xs uppercase tracking-wider text-white/60">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky utility bar */}
      <div className="sticky top-[88px] z-30 border-y border-neutral-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] flex-col items-stretch gap-3 px-6 py-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search within these terms…"
              className="w-full rounded-lg border border-neutral-200 bg-neutral-50 py-2.5 pl-10 pr-3 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-[#009AAA] focus:outline-none focus:ring-2 focus:ring-[#009AAA]/20"
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-700 transition-colors hover:border-[#009AAA] hover:text-[#009AAA]"
            >
              <Printer className="h-4 w-4" /> Print
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#009AAA] px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Questions? Contact us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Body */}
      <section className="mx-auto max-w-[1200px] px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr]">
          {/* TOC */}
          <aside className="lg:sticky lg:top-[170px] lg:self-start">
            <div className="rounded-xl border border-neutral-200 bg-neutral-50/60 p-4">
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                <ScrollText className="h-3.5 w-3.5" /> Contents
              </div>
              <nav className="max-h-[60vh] overflow-y-auto pr-1">
                <ul className="space-y-0.5">
                  {SECTIONS.map((s) => {
                    const active = activeId === s.id;
                    return (
                      <li key={s.id}>
                        <button
                          onClick={() => scrollTo(s.id)}
                          className={`group flex w-full items-start gap-2 rounded-md px-2.5 py-2 text-left text-sm leading-snug transition-colors ${
                            active
                              ? "bg-[#009AAA]/10 text-[#009AAA]"
                              : "text-neutral-600 hover:bg-white hover:text-neutral-900"
                          }`}
                        >
                          <span
                            className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded text-[10px] font-bold ${
                              active
                                ? "bg-[#009AAA] text-white"
                                : "bg-neutral-200 text-neutral-600 group-hover:bg-neutral-300"
                            }`}
                          >
                            {s.num}
                          </span>
                          <span className="text-[13px] font-medium">{s.title}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Sections */}
          <div className="min-w-0">
            <div className="mb-8 rounded-xl border border-[#009AAA]/20 bg-[#009AAA]/5 p-5">
              <div className="flex items-start gap-3">
                <FileText className="mt-0.5 h-5 w-5 shrink-0 text-[#009AAA]" />
                <div>
                  <div
                    className="text-base font-semibold text-neutral-900"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Please read carefully
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                    By placing an order with, or accepting delivery from, GlassCo Australia Pty Ltd,
                    you are bound by these Terms &amp; Conditions of Trade. These terms prevail over
                    any conflicting terms on your purchase order.
                  </p>
                </div>
              </div>
            </div>

            {filtered.length === 0 && (
              <div className="rounded-xl border border-dashed border-neutral-300 bg-neutral-50 p-10 text-center text-neutral-500">
                No clauses matched “{query}”. Try a different search term.
              </div>
            )}

            <div className="space-y-12">
              {filtered.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  ref={(el) => {
                    sectionRefs.current[section.id] = el;
                  }}
                  className="scroll-mt-[180px]"
                >
                  <div className="mb-5 flex items-baseline gap-3 border-b border-neutral-200 pb-3">
                    <span
                      className="inline-flex h-9 min-w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#009AAA] to-[#00DEF7] px-2 text-sm font-bold text-white"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {section.num}
                    </span>
                    <h2
                      className="text-2xl text-neutral-900 md:text-3xl"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
                    >
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {section.clauses.map((c) => (
                      <div
                        key={c.id}
                        id={`clause-${c.id}`}
                        className="group flex gap-4 rounded-lg border border-transparent p-3 transition-colors hover:border-neutral-200 hover:bg-neutral-50/60"
                      >
                        <div className="shrink-0 pt-0.5">
                          <span className="rounded-md bg-neutral-100 px-2 py-0.5 text-xs font-semibold text-[#009AAA]">
                            {c.id}
                          </span>
                        </div>
                        <p className="text-[15px] leading-relaxed text-neutral-700">{c.text}</p>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* Footer CTA */}
            <div className="mt-16 rounded-2xl border border-neutral-200 bg-gradient-to-br from-[#0b1f24] to-[#0d2a31] p-8 text-white">
              <h3
                className="text-2xl"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
              >
                Need clarification on any clause?
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-white/70">
                Our team is happy to talk you through any part of these terms before you place an
                order. Reach out — we’ll respond within one business day.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#009AAA] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Contact our team <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+61397065506"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Call (03) 9706 5506
                </a>
              </div>
              <p className="mt-6 text-xs text-white/40">
                © {new Date().getFullYear()} GlassCo Australia Pty Ltd. Document reference #27789.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#009AAA] text-white shadow-lg shadow-[#009AAA]/30 transition-transform hover:-translate-y-0.5"
          aria-label="Back to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}

      <Footer />
    </div>
  );
}
