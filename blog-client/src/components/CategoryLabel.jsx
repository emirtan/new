import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Label from "../components/Label";

const CategoryLabel = ({
    categories,
    nomargin = false
}) => {
  return (
    <div className="flex gap-3">
      {categories?.length &&
        categories.slice(0).map((category, index) => (
          <Link
            href={`/category/`}
            key={index}>
            <Label nomargin={nomargin} color={category.color}>
              {category.title}
            </Label>
          </Link>
        ))}
    </div>
  )
}

CategoryLabel.propTypes = {
    categories: PropTypes.any,
    nomargin: PropTypes.bool,
}

export default CategoryLabel