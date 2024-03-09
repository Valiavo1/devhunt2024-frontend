import Icon from "../icon/Icon";
import {
	arrowDown,
	Club,
	CorpsAdmin,
	CorpsEnseignant,
	Dashboard,
	Etudiant,
	HomeFilledIcon,
	HomeIcon, LogoutIcon
} from "../icon/IconeFile";
import {Link} from "react-router-dom";
import React, {useState} from "react";
import {useAuthStore} from "../../store/AuthStore";

const AdminSideBar = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const {logout} = useAuthStore()

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};
	return(

<>

		<button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar"
		        aria-controls="sidebar-multi-level-sidebar" type="button"
		        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
			<span className="sr-only">Open sidebar</span>
			<svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
			     xmlns="http://www.w3.org/2000/svg">
				<path clipRule="evenodd" fillRule="evenodd"
				      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
			</svg>
		</button>
	<aside id="sidebar-multi-level-sidebar"
	       className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 "
	       aria-label="Sidebar">

	<div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 " >
		<ul className="space-y-2 font-medium">
			<li>
				<Link to="/admin"
					  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
					<Icon icon={Dashboard}
						  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
					<span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Dashboard</span>
				</Link>
			</li>
			<li>
				<Link to="/admin/corpsAdmin"
					  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
					<Icon icon={CorpsAdmin}
						  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
					<span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Corps admnistratif</span>
				</Link>
			</li>
			<li>
				<Link to="/admin/corpsEnseignant"
					  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
					<Icon icon={CorpsEnseignant}
						  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
					<span className="flex-1 ms-3 whitespace-nowrap">Corps enseignant</span>
				</Link>
			</li>
			<li>
				<Link to="/admin/club"
					  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
					<Icon icon={Club}
						  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
					<span className="flex-1 ms-3 whitespace-nowrap">Clubs</span>
					<span
						className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
				</Link>
			</li>
			<li>

				<Link to="/admin/etudiants"
					  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
					<Icon icon={Etudiant}
						  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
					<span className="flex-1 ms-3 whitespace-nowrap">Etudiants</span>
				</Link>
			</li>
			<li>

				<Link to="/admin/etudiants"
					  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
					<Icon icon={Etudiant}
						  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
					<span className="flex-1 ms-3 whitespace-nowrap">Novices</span>
				</Link>
			</li>

			<li>
				<button type="button"
						className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
						aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
					<Icon icon={CorpsAdmin}
						  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
					<span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Partenaires</span>

					<Icon icon={arrowDown}
						  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>

				</button>
				<ul id="dropdown-example" className={`${isDropdownOpen ? '' : 'hidden'} py-2 space-y-2`}>
					<li>
						<Link to="/admin/immobilier"
							  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
							Immobilier
						</Link>
					</li>
					<li>
						<Link to="/admin/materiel"
							  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
							Matériel</Link>
					</li>
					<li>
						<Link to="/admin/entreprise"
							  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
							Entreprise</Link>
					</li>
				</ul>
			</li>
			<li className={"mt-40"}>
				<div onClick={logout}
					 className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
					<Icon icon={LogoutIcon}
						  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
					<span className="flex-1 ms-3 whitespace-nowrap">Deconnexion</span>
				</div>
			</li>
		</ul>
	</div>
	</aside>


</>

	)
}

export default AdminSideBar;