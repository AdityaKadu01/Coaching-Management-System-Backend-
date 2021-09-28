import React from "react"
import { Card ,CardBody} from "reactstrap";

function Footer ({ name , title }) {
return (
    <div>
<Card className="my-2 bg-warning">
    <CardBody>
  <span className="text-muted">All Rights Reserved 2020 @JavaGuides</span>
    </CardBody>
</Card>


    </div>
);

}
export default Footer  ;