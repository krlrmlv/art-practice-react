export default function Popup({
    onClose, // Функция закрытия
  }) {
    return (
      <div>
        <button onClick={onClose}>x</button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          repellat exercitationem officiis ab voluptates distinctio, ratione
          dolores debitis est. Sequi molestias, iure fugit tempore incidunt ut
          eligendi amet consequatur voluptate!
        </p>
      </div>
    );
  }
  