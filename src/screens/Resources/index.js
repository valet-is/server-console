import { useEffect, useState } from 'react';
import {
  Link,
  useHistory
} from "react-router-dom";

import { fetchAll as apiFetchAllResources } from 'api/resources';

export default function Resources() {
  const history = useHistory();

  const [resources, setResources] = useState([]);

  const fetchAllResources = async () => {
    const resp = await apiFetchAllResources();
    setResources(resp);
  }

  useEffect(() => {
    fetchAllResources();
  }, []);

  const onClickResourceHandler = (id) => {
    history.push(`/resources/${id}`);
  }

  return (
    <div>
      <p>Resources</p>

      <Link to={`/resources/create`}>
        <button>Create a new resource</button>
      </Link>

      <div>
        <table className="table-auto">
          <thead>
            <tr>
              <th class="px-4 py-2">#</th>
              <th class="px-4 py-2">namespace</th>
              <th class="px-4 py-2">name</th>
              <th class="px-4 py-2">type</th>
              <th class="px-4 py-2">status</th>
            </tr>
          </thead>
          <tbody>
            {resources.map(({ _id, namespace, name, type, status }, index) => (
              <tr onClick={onClickResourceHandler.bind(null, _id)} key={_id}>
                <td class="border px-4 py-2">{index + 1}</td>
                <td class="border px-4 py-2">{namespace}</td>
                <td class="border px-4 py-2">{name}</td>
                <td class="border px-4 py-2">{type}</td>
                <td class="border px-4 py-2">{status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
