import React, {useRef, useState} from "react";
import Icon from "../../components/icon/Icon";
import {plus} from "../../components/icon/IconeFile";
import club from "../../assets/club.png";

const Clubs = () => {
	const fileInputRef = useRef(null);
	const [attachments, setAttachments] = useState([]);
	const handleAttachmentChange = () => {
		const files = fileInputRef.current.files;
		setAttachments([...attachments, ...files]);
	};

	const [loading, setLoading] = useState(false);

	const handleImportClick = () => {
		// Mettre à jour l'état de chargement pour indiquer que le chargement est en cours
		setLoading(true);

		// Simuler une requête ou une opération asynchrone
		setTimeout(() => {
			// Réinitialiser l'état de chargement après une certaine durée
			setLoading(false);
		}, 2000); // Ici, 2000 représente une durée de chargement simulée en millisecondes
	};

	return (
		<div className="flex-grow-1 px-3 ml-72 h-screen">

			<h1 className="text-white">CLUBS</h1>
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white ">
					<div >
						<button
							id="dropdownActionButton"
							data-dropdown-toggle="dropdownAction"
							className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
							type="button"
						>
							<span className="sr-only">Action button</span>
							Action
							<svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
								<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
							</svg>
						</button>
						{/* Dropdown menu */}
						<div id="dropdownAction" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
							<ul className="py-1 text-sm text-gray-700 " aria-labelledby="dropdownActionButton">
								<li>
									<a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Reward</a>
								</li>
								<li>
									<a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Promote</a>
								</li>
								<li>
									<a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Activate account</a>
								</li>
							</ul>
							<div className="py-1">
								<a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Delete User</a>
							</div>
						</div>
					</div>
					<div>
						<button
							className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 "
							type="button" onClick={() => fileInputRef.current.click()}
						>
							<Icon icon={plus} className="mr-2"/>
							<span className="sr-only">Import button</span>
							Importer
						</button>
						<input
							type="file"
							className="hidden"
							onChange={handleAttachmentChange}
							ref={fileInputRef}
							multiple
							name="attachmentInput"
						/>
						<label htmlFor="table-search" className="sr-only">Search</label>
					</div>

					<div className="relative">
						<div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
							<svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
								<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
							</svg>
						</div>
						<input type="text" id="table-search-users" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search for users" />
					</div>
				</div>
				<table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
					<tr>
						<th scope="col" className="p-4">
							<div className="flex items-center">
								<input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 " />
								<label htmlFor="checkbox-all-search" className="sr-only">Checkbox</label>
							</div>
						</th>
						<th scope="col" className="px-6 py-3">
							Name
						</th>
						<th scope="col" className="px-6 py-3">
							UserName
						</th>
						<th scope="col" className="px-6 py-3">
							Action
						</th>
					</tr>
					</thead>
					<tbody >

					<tr
						className="bg-white border-b  hover:bg-gray-50 ">
						<td className="w-4 p-4">
							<div className="flex items-center">
								<input id="checkbox-table-search-1" type="checkbox"
								       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 "/>
								<label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
							</div>
						</td>
						<th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
							<img className="w-10 h-10 rounded-full" src={club} alt="Jese image"/>
							<div className="ps-3">
								<div className="text-base font-semibold"> Club 1 </div>

							</div>
						</th>
						<td className="px-6 py-4">
							<div className="flex items-center">
								<div className="font-normal text-gray-500">club1@eni.com</div>
							</div>
						</td>
						<td className="px-6 py-4">
							<a href="#" className="font-medium text-vert-600  hover:underline">Edit user</a>
						</td>
					</tr>
					<tr
						className="bg-white border-b  hover:bg-gray-50 ">
						<td className="w-4 p-4">
							<div className="flex items-center">
								<input id="checkbox-table-search-2" type="checkbox"
								       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 "/>
								<label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
							</div>
						</td>
						<th scope="row"
						    className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
							<img className="w-10 h-10 rounded-full" src={club} alt="club"/>
							<div className="ps-3">
								<div className="text-base font-semibold"> Club 2 </div>
							</div>
						</th>
						<td className="px-6 py-4">
							<div className="font-normal text-gray-500">club2@eni.com</div>
						</td>
						<td className="px-6 py-4">
							<a href="#" className="font-medium text-blue-600  hover:underline">Edit user</a>
						</td>
					</tr>
					<tr
						className="bg-white border-b">
						<td className="w-4 p-4">
							<div className="flex items-center">
								<input id="checkbox-table-search-2" type="checkbox"
								       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500   focus:ring-2 "/>
								<label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
							</div>
						</td>
						<th scope="row"
						    className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
							<img className="w-10 h-10 rounded-full" src={club} alt="Jese image"/>
							<div className="ps-3">
								<div className="text-base font-semibold"> Club 3 </div>
							</div>
						</th>
						<td className="px-6 py-4">
							<div className="font-normal text-gray-500">club3@eni.com</div>
						</td>
						<td className="px-6 py-4">
							<a href="#" className="font-medium text-blue-600  hover:underline">Edit user</a>
						</td>
					</tr>
					<tr
						className="bg-white border-b  hover:bg-gray-50 ">
						<td className="w-4 p-4">
							<div className="flex items-center">
								<input id="checkbox-table-search-2" type="checkbox"
								       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2  "/>
								<label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
							</div>
						</td>
						<th scope="row"
						    className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
							<img className="w-10 h-10 rounded-full" src={club} alt="Jese image"/>
							<div className="ps-3">
								<div className="text-base font-semibold">Club4</div>

							</div>
						</th>

						<td className="px-6 py-4">
							<div className="font-normal text-gray-500">club4@eni.com</div>
						</td>
						<td className="px-6 py-4">
							<a href="#" className="font-medium text-blue-600  hover:underline">Edit user</a>
						</td>
					</tr>

					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Clubs;
