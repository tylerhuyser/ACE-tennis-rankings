export { Page }

import App from '../../../App';
import { useData } from '../../../renderer/useData'

const { data } = useData

function Page(pageContext) {
  return (
    <App pageContext={data}></App>
  );
}