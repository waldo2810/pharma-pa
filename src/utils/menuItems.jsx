import { MdOutlineDashboard as DashboardIcon } from "react-icons/md";
import { MdManageSearch as GestionIcon } from "react-icons/md";
import { MdOutlineAccountBalanceWallet as CarteraIcon } from "react-icons/md";
import { MdOutlineReceiptLong as FacturacionIcon } from "react-icons/md";

export const menuItems = [
  { icon: <DashboardIcon className="icon" />, name: "Dashboard" },
  { icon: <GestionIcon className="icon" />, name: "Gestion" },
  { icon: <CarteraIcon className="icon" />, name: "Cartera" },
  { icon: <FacturacionIcon className="icon" />, name: "Facturacion" },
];
