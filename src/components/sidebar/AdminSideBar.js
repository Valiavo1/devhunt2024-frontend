import Icon from "../icon/Icon";
import {arrowDown, Club, CorpsAdmin, CorpsEnseignant, Dashboard, Etudiant} from "../icon/IconeFile";

const AdminSideBar = () => {
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
	       className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-red-800"
	       aria-label="Sidebar">

	<div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
			<ul className="space-y-2 font-medium">
				<li>
					<a href="#"
					   className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
						<Icon icon={Dashboard} className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>

						<span className="ms-3">Dashboard</span>
					</a>
				</li>
				<li>
					<a href="#"
					   className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
						<Icon icon={CorpsAdmin} className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
						<span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Corps admnistratif</span>
					</a>
				</li>
				<li>
					<a href="#"
					   className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
						<Icon icon={CorpsEnseignant} className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>

						<span className="flex-1 ms-3 whitespace-nowrap">Corps enseignant</span>
					</a>
				</li>
				<li>
					<a href="#"
					   className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
						<Icon icon={Club} className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
						<span className="flex-1 ms-3 whitespace-nowrap">Clubs</span>
						<span
							className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
					</a>
				</li>
				<li>
					<a href="#"
					   className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
						<Icon icon={Etudiant} className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>

						<span className="flex-1 ms-3 whitespace-nowrap">Etudiants</span>
					</a>
				</li>
				<li>
					<button type="button"
					        className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
					        aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
						<Icon icon={CorpsAdmin} className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
						<span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Partenaires</span>

						<Icon icon={arrowDown} className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>

					</button>
					<ul id="dropdown-example" className="hidden py-2 space-y-2">
						<li>
							<a href="#"
							   className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Immobilier</a>
						</li>
						<li>
							<a href="#"
							   className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Matériel</a>
						</li>
						<li>
							<a href="#"
							   className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Entreprise</a>
						</li>
					</ul>
				</li>
				</ul>
		</div>
	</aside>

	<div className="p-4 sm:ml-64">
		<div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
			<div className="grid grid-cols-3 gap-4 mb-4">
				<div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
					<p className="text-2xl text-gray-400 dark:text-gray-500">
						<svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
						     viewBox="0 0 18 18">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							      d="M9 1v16M1 9h16"/>
						</svg>
					</p>
				</div>
				<div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
					<p className="text-2xl text-gray-400 dark:text-gray-500">
						<svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
						     viewBox="0 0 18 18">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							      d="M9 1v16M1 9h16"/>
						</svg>
					</p>
				</div>
				<div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
					<p className="text-2xl text-gray-400 dark:text-gray-500">
						<svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
						     viewBox="0 0 18 18">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							      d="M9 1v16M1 9h16"/>
						</svg>
					</p>
				</div>
			</div>
			<div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
				<p className="text-2xl text-gray-400 dark:text-gray-500">
					<svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
					     viewBox="0 0 18 18">
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
						      d="M9 1v16M1 9h16"/>
					</svg>
				</p>
			</div>
			<div className="grid grid-cols-2 gap-4 mb-4">
				<div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
					<p className="text-2xl text-gray-400 dark:text-gray-500">
						<svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
						     viewBox="0 0 18 18">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							      d="M9 1v16M1 9h16"/>
						</svg>
					</p>
				</div>
				<div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
					<p className="text-2xl text-gray-400 dark:text-gray-500">
						<svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
						     viewBox="0 0 18 18">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							      d="M9 1v16M1 9h16"/>
						</svg>
					</p>
				</div>
				<div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
					<p className="text-2xl text-gray-400 dark:text-gray-500">
						<svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
						     viewBox="0 0 18 18">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							      d="M9 1v16M1 9h16"/>
						</svg>
					</p>
				</div>
				<div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
					<p className="text-2xl text-gray-400 dark:text-gray-500">
						<svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
						     viewBox="0 0 18 18">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							      d="M9 1v16M1 9h16"/>
						</svg>
					</p>
				</div>
			</div>
			<div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
				<p className="text-2xl text-gray-400 dark:text-gray-500">
					<svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
					     viewBox="0 0 18 18">
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
						      d="M9 1v16M1 9h16"/>
					</svg>
				</p>
			</div>
			<div className="grid grid-cols-2 gap-4">
				<div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
					<p className="text-2xl text-gray-400 dark:text-gray-500">
						<svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
						     viewBox="0 0 18 18">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							      d="M9 1v16M1 9h16"/>
						</svg>
					</p>
				</div>
				<div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
					<p className="text-2xl text-gray-400 dark:text-gray-500">
						<svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
						     viewBox="0 0 18 18">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							      d="M9 1v16M1 9h16"/>
						</svg>
					</p>
				</div>
				<div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
					<p className="text-2xl text-gray-400 dark:text-gray-500">
						<svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
						     viewBox="0 0 18 18">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							      d="M9 1v16M1 9h16"/>
						</svg>
					</p>
				</div>
				<div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
					<p className="text-2xl text-gray-400 dark:text-gray-500">
						<svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
						     viewBox="0 0 18 18">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							      d="M9 1v16M1 9h16"/>
						</svg>
					</p>
				</div>
			</div>
		</div>
	</div>
</>

)
}

export default AdminSideBar;