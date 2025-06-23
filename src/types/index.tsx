import {
  DurationUnit,
  MeetingPointType,
  MenuItemType,
  OrderStatus,
  PayStatus,
  SupplierStatus,
  TourType,
  VehicleType,
} from "./enum";
import { Category, User } from "./post";

interface baseProps {
  id: number;
  created_by: User;
  status: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface MenuItemProps {
  title: string;
  url?: string;
  id: number;
  children?: MenuItemProps[];
  icon?: string;
}

export interface MenuProps {
  title: string;
  site: string;
}

export interface SiteProps extends baseProps {
  email: string;
  name: string;
  params: string;
  url: string;
  logo: string;
  socials: string;
  from_name: string;
  from_email: string;
  hotline: string;
  locale: string;
}
export interface Isocials {
  [key: string]: string;
}
export interface SiteParams {
  meta_title: string | "";
  meta_description: string | "";
  meta_keywords: string | "";
  ga_id: string | "";
  og_image: string;
}
export interface postParams {
  meta_description: string | "";
  meta_keywords: string | "";
}
export interface tourParams {
  schema_type: string | "";
  meta_description: string | "";
  meta_keywords: string | "";
}
export interface menuParams {
  meta_description: string | "";
  meta_keywords: string | "";
  path: string | "";
  category_ids: number[];
  layout: "listing" | "grid";
  image: string | "";
  title: string | "";
  sub_title: string | "";
  meta_title: string | "";
}
export interface DestinationsProps extends baseProps {
  title: string;
  alias: string;
  description: string;
  latitude: number;
  longitude: number;
  cover_image: string;
  code: string;
  featured: boolean;
  children: DestinationsProps[];
  parent: DestinationsProps;
  parentId: number;
  country: CountryProps;
}

export interface CountryProps extends baseProps {
  title: string;
  code: string;
  description: string;
  cover_image: string;
  flag: string;
  phone_code: string;
}

export interface UserSession extends User {
  email: string;
  images: string;
  name: string;
  access_token: string;
}

export interface TourProps extends baseProps {
  title: string;
  alias: string;
  sku: string;
  images: string;
  description: string;
  inclusion: string;
  exclusion: string;
  meeting_point: string;
  meeting_point_notes: string;
  terms: string;
  category: Category;
  // operator: Operator;
  type: TourType;
  vehicle_type: VehicleType;
  cover_image: string;
  cover_image_alt: string;
  featured: boolean;
  free_cancel: boolean;
  free_cancel_hours: number;
  cut_off_time: number;
  cancel_policy: string;
  duration: number;
  duration_unit: DurationUnit;
  start_time: string;
  group: boolean;
  reserve_before: number;
  pickup_details: string;
  from_price: number;
  max_person: number;
  min_person: number;
  price_set: boolean;
  img_small: string;
  img_medium: string;
  options: optionProps[];
  destinations: DestinationsProps[];
  refundpolicy: refundPolicyProps;
  images_small: string;
  images_medium: string;
  average_score?: string;
  count_score?: string;
  operator: OperatorProps;
  meeting_point_type: MeetingPointType;
  itineraries?: ItineraryProps[];
  params: string;
  rate_mode: "return" | "flat";
  com_amount: number;
  policies: PolicyProps[];
  cancellation_policy_summary: string;
  cancellation_policies: TourCancellationPolicyProps[];
  destinationIds: number[];
  price_cron: number;
  additional_info: string;
  instant_confirm: boolean;
  brand: boolean;
  toursBrand: TourProps[];
  promotion: {
    discount: number;
  };
}

export interface ItineraryProps extends baseProps {
  title?: string;
  ticket?: "free" | "included" | "not_included";
  description?: string;
  cover_image?: string;
  tour?: TourProps;
  destination?: DestinationsProps;
  meals?: string[];
}

export interface optionProps extends baseProps {
  from_price?: any;
  title: string;
  description: string;
  hourly: boolean;
  time_start: string[];
  max_person: number;
  rate: ratesProps;
  tour: TourProps;
  option_unit: "cabin" | "vehicle" | "room" | "seat";
  group: boolean;
  promotion: {
    discount: number;
  };
}

export interface ratesProps extends baseProps {
  option: optionProps;

  adult_price: number;

  child_price: number;

  infant_price: number;

  seat: number;

  date: Date;
}

export interface refundPolicyProps extends baseProps {
  title: string;
  is_default: boolean;
  description: string;
  hours: number;
}

export interface CustomerProps extends baseProps {
  firstname: string;
  lastname: string;
  fullname: string;
  company_name: string;
  company_shortname: string;
  company_tax_id: string;
  address: string;
  office: string;
  email: string;
  accountant_email: string;
  mobile: string;
  // cgroup: CGroup;
  user: User;
  notes: string;
  phone_code: string;
  contact_info: string;
  date_of_birth: string | null;
}
export interface OrderProps extends baseProps {
  order_no: string;
  customer: CustomerProps;
  order_status: OrderStatus;
  supplier_status: SupplierStatus;
  pay_status: PayStatus;
  subtotal: number;
  total: number;
  service_fee: number;
  depart_date: Date;
  free_cancel_date: string;
  pickup_time: string;
  pickup_address: string;
  qty: number;
  tour_id: number;
  option_id: number;
  option: optionProps;
  adults: number;
  children: number;
  infants: number;
  adult_price: number;
  child_price: number;
  infant_price: number;
  pay_method: string;
  transaction_id: string;
  notes: string;
  is_finished: boolean;
  review_score?: number;
  is_available?: boolean;
  checkout_info: string;
  tour: TourProps;
  operator: OperatorProps;
  seating: number;
  file_voucher: string;
  notify_supplier: boolean;
  accept_change_carrier: boolean;
  supplier_confirmed: boolean;
}
export interface ReviewProps {
  id: number;
  title: string;
  rating: number;
  description: string;
  avatar: string;
  author: string;
  date: string;
}

export interface OperatorProps extends baseProps {
  title: string;
  email: string;
  phone: string;
  firstname: string;
  lastname: string;
  description: string;
  image: string;
}

export interface PaymentMethodProps extends baseProps {
  title: string;
  code: string;
  image: string;
  merchant_id: string;
  api_key: string;
  secret_key: string;
  return_success_url: string;
  return_false_url: string;
  callback_url: string;
  test_mode: boolean;
  test_merchant_id: string;
  test_api_key: string;
  test_secret_key: string;
  service_fee: number;
  img_small: string;
  img_medium: string;
}

export interface PolicyProps extends baseProps {
  title: string;
  is_default: boolean;
  description: string;
  cancel_fee: number;
  hours: number;
}

export interface TourCancellationPolicyProps extends baseProps {
  tour: TourProps;
  policy: PolicyProps;
  cancel_fee: number;
}

export interface ITourCalendarPrice {
  date: string;
  adult_price: string;
}
