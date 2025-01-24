new Vue({
    el: '#appReceta',
    data: {
      lista_recetas: [
        {
          "id": "001",
          "nombre": "Receta de tarta de manzana sin azúcar",
          "descripcion": "Descorazona dos de las manzanas y pélalas. Corta las manzanas en láminas finas y ponlas a cocer en una sartén con la rama de canela a fuego medio durante unos 10 minutos, hasta que se ablanden. Pela el plátano maduro y aplástalo con un tenedor hasta formar un puré. Agrega el puré de plátano a las manzanas cocidas y mezcla bien. Mientras tanto, corta la tercera manzana en rodajas finas y reserva para la decoración. Precalienta el horno a 180°C y engrasa ligeramente un molde para tartas. Coloca las manzanas cocidas con el plátano en la base del molde, formando una capa uniforme. Coloca las rodajas de manzana reservadas encima, formando un patrón decorativo. Hornea durante 30-40 minutos o hasta que la tarta esté dorada y bien cocida. Deja enfriar antes de desmoldar y servir.",
          "chef": "Isabel Rescalvo",
          "ingredientes": [
              {"id": "i001", "nombre": "3 manzanas grandes"},
              {"id": "i002", "nombre": "1 rama de canela"},
              {"id": "i003", "nombre": "1 plátano maduro"}
          ]
        },
        {
          "id": "002",
          "nombre": "Calota de mango",
          "descripcion": "Corta la punta de los bizcochos de soletillas y colócalos en el fondo de un molde, formando una base. Bate las claras de huevo con el azúcar hasta obtener un merengue firme. En otro bol, monta la nata para montar hasta que esté bien firme. Trocea el mango y mézclalo con la nata montada. Incorpora el merengue con movimientos suaves, procurando no desinflar la mezcla. Vierte la mezcla sobre los bizcochos y refrigera durante al menos 4 horas para que tome consistencia. Sirve bien frío y decora con trozos adicionales de mango, si lo deseas.",
          "chef": "Isabel Rescalvo",
          "ingredientes": [
              {"id": "i004", "nombre": "175 gramos de azúcar"},
              {"id": "i005", "nombre": "2 claras de huevo a temperatura ambiente"},
              {"id": "i006", "nombre": "400 gramos de nata para montar"},
              {"id": "i007", "nombre": "100 gramos de mango troceado"}
          ]
        },
        {
          "id": "003",
          "nombre": "Pie de parchita",
          "descripcion": "Tritura las galletas hasta hacerlas polvo y mézclalas con un poco de mantequilla derretida hasta obtener una masa compacta. Forra el fondo de un molde para pie con esta mezcla, presionando bien para que quede uniforme. Hornea la base a 180°C durante unos 10 minutos o hasta que esté dorada. Mientras tanto, en un bol, bate las yemas de huevo con la leche condensada hasta que estén bien integradas. Añade el jugo de parchita (maracuyá) y mezcla hasta obtener una crema suave. Vierte esta mezcla sobre la base de galleta ya horneada y hornea nuevamente a 180°C durante unos 20-25 minutos, o hasta que la mezcla se haya cuajado y esté ligeramente dorada por encima. Deja enfriar a temperatura ambiente y luego refrigera durante al menos 2 horas antes de servir. Decora con un poco de pulpa de parchita encima antes de servir si lo deseas.",
          "chef": "Isabel León",
          "ingredientes": [
              {"id": "i008", "nombre": "3 yemas de huevo"},
              {"id": "i009", "nombre": "1 lata de leche condensada"}
          ]
        },
        {
          "id": "004",
          "nombre": "Dulce de leche repostero",
          "descripcion": "Tritura las galletas hasta hacerlas polvo y resérvalas. En una cacerola grande, coloca la leche entera y el azúcar, y cocina a fuego medio, removiendo constantemente para que no se queme. Cuando la mezcla comience a hervir, baja el fuego y sigue removiendo de manera continua para evitar que se formen grumos. Añade la cucharada de esencia de vainilla y continúa cocinando hasta que la mezcla se haya reducido y tenga una consistencia espesa, similar a un dulce de leche cremoso. Cuando esté listo, agrega las galletas trituradas y mezcla bien hasta que estén completamente integradas. Cocina unos minutos más para que la mezcla adquiera la textura deseada. Retira del fuego y deja enfriar antes de usar en tortas, postres o como relleno.",
          "chef": "Carolita",
          "ingredientes": [
              {"id": "i010", "nombre": "1 litro de leche entera"},
              {"id": "i011", "nombre": "300 gramos de azúcar"},
              {"id": "i012", "nombre": "1 cucharada de esencia de vainilla"}
          ]
        },
        {
          "id": "005",
          "nombre": "Mermelada de durazno",
          "descripcion": "Limpia la mesa y quítales la cáscara a los duraznos (o nísperos) y córtalos en trozos pequeños. Colócalos en una cacerola grande junto con el azúcar y el trozo de limón. Cocina a fuego medio, removiendo constantemente para evitar que se pegue. Deja que la mezcla hierva durante unos 15-20 minutos hasta que los frutos se deshagan y la consistencia sea más espesa. Si prefieres una mermelada más suave, puedes triturar la mezcla con una batidora de mano. Una vez lista, retira el trozo de limón y vierte la mermelada caliente en frascos esterilizados. Tapa los frascos mientras aún están calientes para crear un vacío, lo que ayudará a que la mermelada se conserve por más tiempo. Deja enfriar completamente y guarda en un lugar fresco y oscuro.",
          "chef": "Montse Morone",
          "ingredientes": [
              {"id": "i013", "nombre": "1 kilogramo de níspero sin piel"},
              {"id": "i014", "nombre": "200 gramos de azúcar"},
              {"id": "i015", "nombre": "1 trozo de limón"},
              {"id": "i016", "nombre": "2 cucharadas soperas"}
          ]
        }
      ],
      search: '',
      show_add_receta: false,
      newReceta: {
        nombre: '',
        descripcion: '',
        chef: '',
        ingredientes: [{ nombre: '' }]
      },
      selectedReceta: null
    },
    computed: {
      filteredRecetas() {
        return this.lista_recetas.filter(receta => 
          receta.nombre.toLowerCase().includes(this.search.toLowerCase())
        );
      }
    },
    methods: {
      selectReceta(receta) {
        this.selectedReceta = receta;
      },
      addIngredient() {
        this.newReceta.ingredientes.push({ nombre: '' });
      },
      removeIngredient(index) {
        this.newReceta.ingredientes.splice(index, 1);
      },
      addReceta() {
        if (this.newReceta.nombre && this.newReceta.descripcion && this.newReceta.chef) {
          const newId = (this.lista_recetas.length + 1).toString().padStart(3, '0');
          this.lista_recetas.push({
            ...this.newReceta,
            id: newId,
            ingredientes: this.newReceta.ingredientes.map((ing, index) => ({ id: 'i' + (this.lista_recetas.length * 10 + index).toString().padStart(3, '0'), nombre: ing.nombre }))
          });
          this.resetNewReceta();
        } else {
          alert('Por favor complete todos los campos.');
        }
      },
      resetNewReceta() {
        this.newReceta = {
          nombre: '',
          descripcion: '',
          chef: '',
          ingredientes: [{ nombre: '' }]
        };
        this.show_add_receta = false;
      }
    }
  });







