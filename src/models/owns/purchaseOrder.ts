import { Audit } from './audit';
import Part, { parts } from './part';
import { Vendor, vendors } from './vendor';

interface PartPurchase {
  part: Part;
  quantity: number;
}
export default interface PurchaseOrder extends Audit {
  name: string;
  id: number;
  partPurchases: PartPurchase[];
  category: string;
  additionalDetails: string;
  vendor?: Vendor;
  shippingDueDate: string;
  shippingAdditionalDetail: string;
  shippingShipToName: string;
  shippingCompanyName: string;
  shippingAddress: string;
  shippingCity: string;
  shippingState: string;
  shippingZipCode: string;
  shippingPhone: string;
  shippingFax: string;
  additionalInfoRequistionerName: string;
  additionalInfoShippingMethod: string;
  additionalInfoTerm: string;
  additionalInfoNotes: string;
}

export const purchaseOrders: PurchaseOrder[] = [
  {
    name: 'Purchase 1',
    id: 54,
    partPurchases: parts.map((part) => {
      return { part, quantity: 3 };
    }),
    category: 'string',
    additionalDetails: 'string',
    vendor: vendors[0],
    shippingDueDate: 'string',
    shippingAdditionalDetail: 'string',
    shippingShipToName: 'string',
    shippingCompanyName: 'string',
    shippingAddress: 'string',
    shippingCity: 'string',
    shippingState: 'string',
    shippingZipCode: 'string',
    shippingPhone: 'string',
    shippingFax: 'string',
    additionalInfoRequistionerName: 'string',
    additionalInfoShippingMethod: 'string',
    additionalInfoTerm: 'string',
    additionalInfoNotes: 'string',
    createdAt: 'fghb',
    createdBy: 1,
    updatedAt: 'string',
    updatedBy: 1
  }
];
