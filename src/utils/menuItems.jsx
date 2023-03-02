import { MdOutlineDashboard as DashboardIcon } from "react-icons/md";
import { MdManageSearch as GestionIcon } from "react-icons/md";
import { MdOutlineAccountBalanceWallet as CarteraIcon } from "react-icons/md";
import { MdOutlineReceiptLong as FacturacionIcon } from "react-icons/md";

export const menuItems = [
  { icon: <DashboardIcon className="text-[1.5rem]" />, name: "Dashboard" },
  { icon: <GestionIcon className="text-[1.5rem]" />, name: "Gestion" },
  { icon: <CarteraIcon className="text-[1.5rem]" />, name: "Cartera" },
  { icon: <FacturacionIcon className="text-[1.5rem]" />, name: "Facturacion" },
];
